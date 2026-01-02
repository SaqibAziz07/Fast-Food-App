import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowProduct from './components/ShowProduct';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cart items ka total count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Cart me item add karna
  const addToCart = (product, quantity, selectedDrink) => {
    const newItem = {
      ...product,
      quantity,
      drink: selectedDrink,
      totalPrice: (parseFloat(product.price) + (selectedDrink.price || 0)) * quantity
    };
    
    setCartItems(prevItems => {
      // Check if item already exists
      const existingIndex = prevItems.findIndex(item => 
        item.id === product.id && item.drink?.name === selectedDrink.name
      );
      
      if (existingIndex >= 0) {
        // Update quantity if exists
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += quantity;
        updatedItems[existingIndex].totalPrice = 
          (parseFloat(product.price) + (selectedDrink.price || 0)) * updatedItems[existingIndex].quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, newItem];
      }
    });
  };

  // Cart se item remove karna
  const removeFromCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  // Cart ka total calculate karna
  const cartTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  // Modal open karne ka function
  const openProductModal = (product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <Routes>
        <Route path="/" element={
          <Home 
            openProductModal={openProductModal}
            addToCart={addToCart}
          />} 
        />
        <Route path="/collection" element={
          <Collection 
            openProductModal={openProductModal}
            addToCart={addToCart}
          />} 
        />
        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="*" element={
          <Home 
            openProductModal={openProductModal}
            addToCart={addToCart}
          />} 
        />
      </Routes>
      
      <Footer />
      
      {/* Product Modal */}
      {modalProduct && (
        <ShowProduct 
          product={modalProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addToCart={(quantity, selectedDrink) => addToCart(modalProduct, quantity, selectedDrink)}
        />
      )}
      
      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
      />
    </Router>
  )
}

export default App;