import React from 'react'

const Card = (props) => {
  const { product } = props;

    return (
        <div
            className="rounded-2xl cursor-pointer overflow-hidden bg-[#FFF] backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
        >
            {/* Image */}
            <div className="h-52 overflow-hidden">
                <img
                    src={product.image}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                    {product.title}
                </h3>

                <span className="text-sm text-yellow-500">
                    ⭐ {product.rating}
                </span>

                <p className="text-sm text-gray-600 line-clamp-2 h-10">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xl mt-2 font-semibold text-gray-900">
                        ${product.price}
                    </span>

                    <button
                        className="w-[70%] cursor-pointer mt-4 py-2 rounded-xl bg-[#e7c000] text-black text-sm font-bold hover:bg-[#c1a100c3] transition"
                    >
                        Add to Cart
                    </button>

                </div>


            </div>
        </div>
    )
}

export default Card