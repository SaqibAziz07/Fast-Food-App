import { useState, useEffect, useMemo, useCallback } from "react";

import CategoryFilter from "../components/CategoryFilter";
import Products from "../components/Products";
import RatingFilter from "../components/RatingFilter";
import Pricefilter from "../components/Pricefilter";
import SortingFilter from "../components/SortingFilter";
import FilterChips from "../components/FilterChips";

import { getVisibleProducts } from "../data/product-filters";
import { priceRange } from "../data/products";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

const ITEMS_PER_PAGE = 6;

function Collection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [sortOption, setSortOption] = useState("PriceLowToHigh");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FILTER HANDLERS ================= */

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    }
  };

  const onChangeRatingHandler = (rating) => {
    setSelectedRating((prev) => (prev === rating ? "" : rating));
  };

  const onChangeSortHandler = (option) => {
    setSortOption(option);
  };

  /* ================= FILTERED PRODUCTS ================= */

  const filteredProducts = useMemo(() => {
    let products = getVisibleProducts(
      selectedCategories,
      selectedRating,
      initPriceRange
    );

    switch (sortOption) {
      case "PriceLowToHigh":
        return [...products].sort((a, b) => a.price - b.price);
      case "PriceHightToLow":
        return [...products].sort((a, b) => b.price - a.price);
      case "ratingHightToLow":
        return [...products].sort((a, b) => b.rating - a.rating);
      case "ratingLowToHigh":
        return [...products].sort((a, b) => a.rating - b.rating);
      default:
        return products;
    }
  }, [selectedCategories, selectedRating, initPriceRange, sortOption]);

  /* ================= RESET PAGE ON FILTER CHANGE ================= */

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedRating, initPriceRange, sortOption]);

  /* ================= PAGINATION ================= */

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  /* ================= CLEAR FILTERS ================= */

  const clearAllFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedRating("");
    setInitPriceRange(initPriceFilter);
    setSortOption("PriceLowToHigh");
  }, []);

  const handleClearFilter = useCallback((type, value) => {
    switch (type) {
      case "category":
        setSelectedCategories((prev) => prev.filter((c) => c !== value));
        break;
      case "rating":
        setSelectedRating("");
        break;
      case "price":
        setInitPriceRange(initPriceFilter);
        break;
      case "sort":
        setSortOption("PriceLowToHigh");
        break;
      default:
        break;
    }
  }, []);

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-[#E7C000]">
      <div className="px-2 sm:px-6 lg:px-4 py-2">
        <div className="flex justify-between items-center mb-8">
          <span>
            Showing <strong>{filteredProducts.length}</strong> products
          </span>

          <FilterChips
            selectedCategories={selectedCategories}
            selectedRating={selectedRating}
            currentPriceRange={initPriceRange}
            sortOption={sortOption}
            handleClearFilter={handleClearFilter}
            clearAllFilters={clearAllFilters}
            priceRangeMax={priceRange.max}
          />

          <SortingFilter click={onChangeSortHandler} />
        </div>

        <div className="flex gap-6 mt-6">
          <div className="hidden lg:block w-70 space-y-6">
            <CategoryFilter
              selectedCategories={selectedCategories}
              onChangeCategory={onChangeCategoryHandler}
            />

            <Pricefilter
              init={initPriceRange}
              price={priceRange}
              setfun={setInitPriceRange}
            />

            <RatingFilter
              onChangeRating={onChangeRatingHandler}
              selectedRating={selectedRating}
            />
          </div>

          <div className="flex-1">
            <Products products={paginatedProducts} />

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 my-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-4 py-2 font-bold bg-white rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded ${page === currentPage
                          ? "bg-gray-600 text-black font-bold"
                          : "bg-white text-black"
                        }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-4 py-2 font-bold bg-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;