import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import Navbar_2 from '../components/Navbar_2'
import NewArrival from '../components/NewArrival'
import Burgers from '../components/Burgers'
import Shawarma from '../components/Shawarma'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Carousel />
      <Navbar_2 />
      <NewArrival />
      <Burgers />
      <Shawarma />
    </>
  )
}

export default Home;