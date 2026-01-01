import React from "react";

function SortingFilter({ click }) {
  return (
    <div className="flex justify-center items-center">
      <select
        onChange={(e) => click(e.target.value)}
        className="bg-white font-semibold border border-gray-600 hover:shadow-gray-500 shadow-xs text-black py-3 px-4 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 appearance-none cursor-pointer min-w-[200px]"
      >
        <option value="PriceLowToHigh">Price: Low to High</option>
        <option value="PriceHightToLow">Price: High to Low</option>
        <option value="ratingHightToLow">Rating: High to Low</option>
        <option value="ratingLowToHigh">Rating: Low to High</option>
      </select>
    </div>
  );
}

export default SortingFilter;