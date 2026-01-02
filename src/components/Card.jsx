const Card = ({ product, openProductModal }) => {
  if (!product) return null;

  return (
    <div className="rounded-2xl cursor-pointer overflow-hidden bg-[#FFF] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      
      <div 
        className="h-52 overflow-hidden" 
        onClick={() => openProductModal(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
        <span className="text-sm text-yellow-500">⭐ {product.rating}</span>
        <p className="text-sm text-gray-600 line-clamp-2 h-10">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl mt-2 font-semibold text-gray-900">
            ${product.price}
          </span>

          <button
            onClick={() => openProductModal(product)}
            className="w-[70%] cursor-pointer mt-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-bold hover:bg-orange-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;