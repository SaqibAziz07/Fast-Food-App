import React from 'react'
import Logo from '../assets/img/logo.png'
import Play_Store from '../assets/img/play store.svg'
import App_Store from '../assets/img/appstore.svg'
import Facebook from '../assets/img/facebook.png'
import Instagram from '../assets/img/instagram.png'
import LinkedIn from '../assets/img/linkedin.png'
import Twitter from '../assets/img/twitter.png'
import Youtube from '../assets/img/yt.png'

const Footer = () => {
    return (
        <footer className='bg-white flex flex-col md:flex-row w-full px-4 md:px-10 shadow-lg border border-gray-400'>
            <div className='flex flex-col md:flex-row items-sart mt-10 gap-2 md:gap-6 md:w-3/4'>
                <div>
                    <img className='w-42 h-42' src={Logo} alt="Logo" />
                </div>

                <div className='space-y-2'>
                    <h4 className='font-bold'>OPTP</h4>
                    <p className='text-[#797979] text-sm'><b className='text-black'>Phone:</b> +923122144336</p>
                    <p className='text-[#797979] text-sm'><b className='text-black'>Email:</b> azizsaqib057@gmail.com</p>
                    <p className='text-[#797979] text-sm'><b className='text-black'>Address:</b> OPTP North Nazimabad, Block H North Nazimabad Town, Nazimabad, Karachi</p>

                    <div className='flex items-start justify-start gap-2 md:gap-6 mt-6'>
                        <img className='w-30 ' src={App_Store} alt="App_Store" />
                        <img className='w-30' src={Play_Store} alt="Play_Store" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-1/3 space-y-4 mt-6'>
                <h4 className='font-bold whitespace-nowrap'>Our Timings</h4>
                <div>
                    <div className='flex md:flex-row gap-7 lg:gap-20 whitespace-nowrap'>
                        <p className='md:text-sm'>Monday - Friday</p>
                        <p className='text-[#797979] text-sm' >11:00 AM - 02:00 AM</p>
                    </div>
                    <div className='flex gap-4 whitespace-nowrap lg:gap-17'>
                        <p className='md:text-sm'>Saturday - Sunday</p>
                        <p className='text-[#797979] text-sm md:text-sm'>11:00 AM - 03:00 AM</p>
                    </div>
                </div>

                <h4 className='font-bold'>Follow Us:</h4>
                <div className='flex gap-4 space-y-4'>
                    <img className='h-8 w-8 md:w-10 md:h-10' src={Facebook} alt="" />
                    <img className='h-8 w-8 md:w-10 md:h-10' src={Instagram} alt="" />
                    <img className='h-8 w-8 md:w-10 md:h-10' src={LinkedIn} alt="" />
                    <img className='h-8 w-8 md:w-10 md:h-10' src={Twitter} alt="" />
                    <img className='h-8 w-8 md:w-10 md:h-10' src={Youtube} alt="" />
                </div>
                
                <div className='flex flex-wrap lg:flex-wrap md:gap-4 underline whitespace-nowrap gap-y-2 text-[#797979] '>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Become a Franchisee</p>
                    <p className='mb-8'>Sitemap</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer