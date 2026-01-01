import Rating from "./Rating";

function ProductCard(props) {
  const { product } = props;

  return (
    <div className="group relative w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-300  border border-gray-800">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-xl mb-2 text-white line-clamp-2 group-hover:text-yellow-400 transition-colors">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-3 mb-3">
            <Rating rating={product.rating} />
            <span className="text-sm text-gray-400">({product.rating})</span>
          </div>

          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            {/* {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )} */}
          </div>
          
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group/btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="font-semibold">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;