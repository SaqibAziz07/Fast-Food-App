import Checkbox from "./Checkbox";
import { categoryTitle } from "../data/category.js";

function CategoryFilter({ selectedCategories, onChangeCategory }) {
  return (
    <div className="p-5 space-y-3 border border-gray-800 rounded-lg bg-white">
      <h3 className="font-bold text-lg text-black">Categories</h3>
      {categoryTitle.map((category, index) => (
        <Checkbox
          key={index}
          text={category}
          checked={selectedCategories.includes(category)}
          onChange={(e) => onChangeCategory(category, e.target.checked)}
          labelClassName="text-black font-semibold"
          checkboxClassName="text-red-600 bg-gray-800 border-gray-700 focus:ring-red-500"
        />
      ))}
    </div>
  );
}

export default CategoryFilter;