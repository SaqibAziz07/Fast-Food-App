import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, removeFromCart, cartTotal }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout', {
      state: { cartItems }
    });
  };

  const handleContinueShopping = () => {
    onClose();
    navigate('/collection');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50"
            onClick={onClose}
          ></motion.div>

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={24} className="text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
                  {cartItems.length > 0 && (
                    <span className="bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-10">
                    <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <button
                      onClick={handleContinueShopping}
                      className="mt-4 text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${item.drink?.name}-${index}`} className="flex gap-4 pb-6 border-b">
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 p-2">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="font-bold text-gray-900">Rs. {item.totalPrice.toFixed(2)}</p>
                          </div>
                          
                          {item.drink && item.drink.name !== "No Drink" && (
                            <p className="text-sm text-gray-600 mt-1">
                              Drink: {item.drink.name.replace(/\(\+\$[^)]+\)/, '')}
                            </p>
                          )}
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Qty:</span>
                              <span className="bg-gray-100 px-3 py-1 rounded-full font-semibold">
                                {item.quantity}
                              </span>
                            </div>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-red-600 hover:text-red-800 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t p-6 bg-gray-50">
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span>Subtotal</span>
                    <span>Rs. {cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Shipping and taxes calculated at checkout.
                  </p>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-4 cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="text-center">
                    <button
                      onClick={handleContinueShopping}
                      className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer"
                    >
                      Continue Shopping →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;