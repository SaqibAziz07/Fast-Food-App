import React from 'react'
import { Link } from 'react-router-dom';
import Burger_Carousel from '../assets/img/burger_carousel.jpg'
import Products from './Products';
import { products } from '../data/products';


const Burgers = () => {
    const burgerItems = products.filter(item => item.category === "Burger");

    return (
        <section className="bg-white py-16 max-w-7xl m-auto">
            <div className="px-4">
                <h2 className="text-3xl font-bold text-gray-900 mx-10">
                    Burgers
                </h2>
                <img className='w-full mx-auto mt-4 rounded-2xl mb-10' src={Burger_Carousel} alt="Burgers" />

                <Products products={burgerItems} />
                <Link to="/collection">
                    <button className='text-white bg-amber-300 active:scale-110 transition-transform duration-100 cursor-pointer float-end my-4 mx-2 px-4 py-2 rounded-full text-md font-semibold'>
                        View all →
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Burgers;