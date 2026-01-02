import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShowProduct = ({ product, isOpen, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDrink, setSelectedDrink] = useState({ id: "none", name: "No Drink", price: 0 });
  const [totalPrice, setTotalPrice] = useState(0);

  const drinkOptions = [
    { id: "none", name: "No Drink", price: 0 },
    { id: "coke", name: "Coke (+$2.00)", price: 2.00 },
    { id: "sprite", name: "Sprite (+$2.00)", price: 2.00 },
    { id: "fanta", name: "Fanta (+$2.00)", price: 2.00 },
    { id: "pepsi", name: "Pepsi (+$2.00)", price: 2.00 },
    { id: "water", name: "Water (+$1.00)", price: 1.00 },
  ];

  // (Product Price + Drink Price) * Quantity
  useEffect(() => {
    if (product) {
      const basePrice = parseFloat(product.price);
      const combinedPrice = (basePrice + selectedDrink.price) * quantity;
      setTotalPrice(combinedPrice.toFixed(2));
    }
  }, [product, quantity, selectedDrink]);

  // Modal band hone par reset
  useEffect(() => {
    if (!isOpen) {
      setQuantity(1);
      setSelectedDrink(drinkOptions[0]);
    }
  }, [isOpen]);

  const handleDrinkChange = (e) => {
    const selectedOption = drinkOptions.find(d => d.name === e.target.value);
    setSelectedDrink(selectedOption || drinkOptions[0]);
  };

  const handleConfirmAdd = () => {
    addToCart(quantity, selectedDrink);
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:col-span-5 bg-white flex items-center justify-center p-6">
              <img src={product.image} alt={product.title} className="max-h-full object-contain" />
            </div>

            {/* Details Section */}
            <div className="p-3 sm:p-10 md:col-span-7 bg-gray-50/50">
              <h2 className="text-2xl font-black text-gray-900 leading-tight">{product.title}</h2>
              <p className="mt-3 text-gray-500 text-md leading-relaxed">{product.description}</p>

              <form className="mt-6 space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* 1. Drinks Dropdown with Choice */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-orange-600">Select Cold Drink</label>
                  <select
                    onChange={handleDrinkChange}
                    value={selectedDrink.name}
                    className="mt-2 block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 font-semibold text-gray-700 focus:outline-none transition-all cursor-pointer"
                  >
                    {drinkOptions.map((drink) => (
                      <option key={drink.id} value={drink.name}>
                        {drink.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Quantity Counter */}
                <div className="flex items-center justify-center border-t border-gray-200 pt-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Quantity</label>
                    <div className="flex items-center gap-20 bg-white border-2 border-gray-200 rounded-2xl p-1 w-fit mx-auto">
                      <button
                        type="button"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-xl font-bold transition-colors"
                      >
                        −
                      </button>
                      <span className="text-lg font-bold w-6 text-center">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600 hover:bg-orange-200 text-xl font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button with Price */}
                <button
                  onClick={handleConfirmAdd}
                  className="flex justify-between items-center gap-3 px-6 w-full cursor-pointer rounded-2xl bg-orange-600 py-2 text-md font-semibold text-white shadow-xl hover:bg-orange-700 transition-all active:scale-95"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] uppercase opacity-80">Total Payable</span>
                    <p className="text-xl font-black">Rs.{totalPrice}</p>
                  </div>
                  <span className="text-lg font-bold">Add to Cart</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ShowProduct;