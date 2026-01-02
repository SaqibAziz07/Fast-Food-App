import React from 'react'
import Carousel from '../components/Carousel'
import Navbar_2 from '../components/Navbar_2'
import NewArrival from '../components/NewArrival'
import Burgers from '../components/Burgers'
import Shawarma from '../components/Shawarma'

const Home = ({ openProductModal, addToCart }) => {
  return (
    <>
      <Carousel />
      <Navbar_2 />
      <NewArrival openProductModal={openProductModal} addToCart={addToCart} />
      <Burgers openProductModal={openProductModal} addToCart={addToCart} />
      <Shawarma openProductModal={openProductModal} addToCart={addToCart} />
    </>
  )
}

export default Home;