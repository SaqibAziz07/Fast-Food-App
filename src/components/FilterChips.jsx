import React from 'react';

const getChipLabel = (type, value, priceRange) => {
  switch (type) {
    case 'category':
      return value;
    case 'rating':
      return `${value} ⭐`;
    case 'price':
      return `Under $${priceRange.max}`;
    case 'sort':
      return `Sorted: ${value.replace(/([A-Z])/g, ' $1').trim()}`;
    default:
      return '';
  }
};

const FilterChips = ({
  selectedCategories,
  selectedRating,
  currentPriceRange,
  sortOption,
  handleClearFilter,
  clearAllFilters,
  priceRangeMax
}) => {
  const chips = [];

  selectedCategories.forEach(cat => {
    chips.push({ type: 'category', value: cat });
  });

  if (selectedRating) {
    chips.push({ type: 'rating', value: selectedRating });
  }

  if (currentPriceRange.isApplied  && currentPriceRange.max < priceRangeMax) {
    chips.push({ type: 'price', value: 'range' });
  }

  if (sortOption && sortOption !== "PriceLowToHigh") {
    chips.push({ type: 'sort', value: sortOption });
  }

  if (chips.length === 0) return null;

  return (
    <div className="py-2 bg-white border border-gray-400 hover:shadow-gray-500 shadow-xs rounded-xl">
      <div className="flex flex-wrap items-center gap-1 p-2">
        <span className="text-sm font-bold text-black">Active Filters:</span>

        {chips.map((chip, index) => (
          <div
            key={`${chip.type}-${chip.value}-${index}`}
            className="flex flex-wrap items-center px-2 py-1 bg-green-600 text-gray-200 text-xs font-medium rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 cursor-pointer"
          >
            <span>{getChipLabel(chip.type, chip.value, currentPriceRange)}</span>
            <button
              onClick={() => handleClearFilter(chip.type, chip.value)}
              className="hover:bg-green-800 rounded-full py-1 transition-colors focus:outline-none"
              aria-label={`Clear ${chip.type} filter`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        ))}
        
        <button
          onClick={clearAllFilters}
          className="ml-2 px-2 py-2 bg-gray-600 hover:bg-gray-800 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:scale-105"
        >
          Clear All ({chips.length})
        </button>
      </div>
    </div>
  );
};

export default FilterChips;