import { useState, useEffect, useMemo, useCallback } from "react";
import { Filter, X } from 'lucide-react';
import CategoryFilter from "../components/CategoryFilter";
import Products from "../components/Products";
import RatingFilter from "../components/RatingFilter";
import Pricefilter from "../components/Pricefilter";
import SortingFilter from "../components/SortingFilter";
import FilterChips from "../components/FilterChips";
import ShowProduct from "../components/ShowProduct";
import { getVisibleProducts } from "../data/product-filters";
import { priceRange } from "../data/products";

const initPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
  isApplied: false,
};

const ITEMS_PER_PAGE = 6;

function Collection({ addToCart }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [initPriceRange, setInitPriceRange] = useState(initPriceFilter);
  const [sortOption, setSortOption] = useState("PriceLowToHigh");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* ================= MODAL HANDLERS ================= */
  const openProductModal = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = (product, quantity, selectedDrink) => {
    addToCart(product, quantity, selectedDrink);
    setIsModalOpen(false);
  };

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
    setMobileFiltersOpen(false); // Mobile drawer band karein
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-orange-400">
      <div className="px-2 sm:px-6 lg:px-4 py-2">
        {/* Mobile Filters Button (Only on small screens) */}
        <div className="lg:hidden mb-4 flex justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <Filter size={15} />
            <span className="font-semibold">Filters</span>
            {(selectedCategories.length > 0 || selectedRating || initPriceRange.isApplied) && (
              <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {selectedCategories.length + (selectedRating ? 1 : 0) + (initPriceRange.isApplied ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 justify-between items-center mb-8">
          <span className="hidden md:block text-white font-semibold">
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
          {/* Desktop Filters (Hidden on mobile) */}
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

          {/* Products Section */}
          <div className="flex-1">
            <Products 
              products={paginatedProducts} 
              openProductModal={openProductModal}
            />

            {totalPages > 1 && (
              <div className="flex justify-center gap-2 my-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-4 py-2 font-bold bg-white rounded disabled:opacity-50 hover:bg-gray-100"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded transition-colors ${
                        page === currentPage
                          ? "bg-orange-600 text-white font-bold"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-4 py-2 font-bold bg-white rounded disabled:opacity-50 hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer/Slide-over */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileFiltersOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {/* Active filters count */}
                {(selectedCategories.length > 0 || selectedRating || initPriceRange.isApplied) && (
                  <div className="mt-2">
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Clear all filters ({selectedCategories.length + (selectedRating ? 1 : 0) + (initPriceRange.isApplied ? 1 : 0)})
                    </button>
                  </div>
                )}
              </div>

              {/* Filters Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
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

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t p-6">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {modalProduct && (
        <ShowProduct 
          product={modalProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addToCart={(quantity, selectedDrink) => handleAddToCart(modalProduct, quantity, selectedDrink)}
        />
      )}
    </div>
  );
}

export default Collection;