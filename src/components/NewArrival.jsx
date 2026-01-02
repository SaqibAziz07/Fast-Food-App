import React from 'react'
import { Link } from 'react-router-dom';
import New_arrival from '../assets/img/new arrival.jpg'
import Products from './Products';
import { products } from '../data/products';

const NewArrival = ({ openProductModal, addToCart }) => {
    const newArrival = products.filter(item => item.category === "New Deal");

    return (
        <section className="bg-white py-16 max-w-7xl m-auto">
            <div className="px-4">
                <h2 className="text-3xl font-bold text-gray-900 mx-10">
                    New Arrival
                </h2>
                <img className='w-full mx-auto mt-4 rounded-2xl mb-10' src={New_arrival} alt="New_Arrival" />

                <Products 
                  products={newArrival} 
                  openProductModal={openProductModal}
                  addToCart={addToCart}
                />
                <Link to="/collection">
                    <button className='text-white bg-orange-600 active:scale-110 transition-transform duration-100 cursor-pointer float-end my-4 mx-2 px-4 py-2 rounded-full text-md font-semibold'>
                        View all →
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default NewArrival;