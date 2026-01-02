import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartItems = location.state?.cartItems || [];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Karachi',
    country: 'Pakistan',
    paymentMethod: 'cod',
    deliveryMethod: 'standard'
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => 
    sum + (item.price + (item.drink?.price || 0)) * item.quantity, 0
  );
  const deliveryFee = formData.deliveryMethod === 'express' ? 150 : 100;
  const tax = subtotal * 0.13;
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Shopping
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Checkout</h1>
        </div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="lg:flex gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Delivery Details */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Truck className="text-orange-600" />
                  Delivery Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:border-2 outline-none transition"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:border-2 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:border-2 outline-none transition"
                      placeholder="03XX-XXXXXXX"
                    //   required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:border-2 outline-none transition"
                    >
                      <option value="Pakistan">Karachi</option>
                      <option value="USA">Lahore</option>
                      <option value="UK">Islamabad</option>
                      <option value="UAE">Peshawar</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange-500 focus:border-2 outline-none transition resize-none"
                      placeholder="House#123, Street#45, Nazimabad, Karachi"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-orange-600" />
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-400 cursor-pointer transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-orange-600 focus:ring-orange-500"
                    />
                    <div className="ml-4">
                      <span className="font-semibold text-gray-900">Cash on Delivery</span>
                      <p className="text-sm text-gray-600">Pay when you receive your order</p>
                    </div>
                    <div className="ml-auto text-lg font-bold">Free</div>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-400 cursor-pointer transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="h-5 w-5 text-orange-600 focus:ring-orange-500"
                    />
                    <div className="ml-4">
                      <span className="font-semibold text-gray-900">Credit/Debit Card</span>
                      <p className="text-sm text-gray-600">Pay securely with your card</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex gap-2">
                        <div className="w-10 h-6 bg-blue-500 rounded"></div>
                        <div className="w-10 h-6 bg-red-500 rounded"></div>
                        <div className="w-10 h-6 bg-yellow-500 rounded"></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Total Orders</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 pb-4 border-b">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      {item.drink && item.drink.name !== "No Drink" && (
                        <p className="text-sm text-gray-600">+ {item.drink.name}</p>
                      )}
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">Qty: {item.quantity}</span>
                        </div>
                        <div className="font-bold">
                          Rs. {((item.price + (item.drink?.price || 0)) * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>Rs. {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (13%)</span>
                  <span>Rs. {tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-600">Rs. {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleSubmit}
                className="w-full mt-6 py-3 bg-orange-600 cursor-pointer text-white text-lg font-bold rounded-xl hover:bg-orange-700 transition shadow-lg shadow-orange-200"
              >
                Place Order - Rs. {total.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;