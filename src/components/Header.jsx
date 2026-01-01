import Logo from '../assets/img/logo.png'
import { CircleUserRound, MapPinned, ShoppingBag } from 'lucide-react'

const Header = () => {
    return (
        <header className='flex justify-between pt-2 px-4 lg:px-20 shadow-lg sticky top-0 bg-white z-50'>
            <div className='flex justify-center items-center gap-2 md:gap-4'>
                <img className='w-16 h-16 cursor-pointer' src={Logo} alt="Logo" />
                <div className='flex gap-x-2 items-center'>
                    <MapPinned size={26} color="#000000" strokeWidth={2} />
                    <div>
                        <a className='font-semibold hover:underline lg:font-bold' href="#">Deliver to</a>
                        <p className='text-xs overflow-hidden whitespace-nowrap w-32 md:overflow-visible'>Nazimabad Block 3, Karachi ~ eta 30 min.</p>
                    </div>
                </div>
            </div>
                {/* <input
                    className='bg-[#FFFFFF] border border-[#8a8a8a] rounded-xl px-4 py-2 my-2  text-black placeholder-[#FFFFF] placeholder:font-semibold focus:outline-none shadow-lg active:outline-none transition-all duration-200 text-sm w-full max-w-lg'
                    type="search"
                    id="search"
                    placeholder="Search for Burgers, Pizzas and many more..."

                /> */}

            <div className='flex items-center justify-center gap-4'>
                <span><ShoppingBag className='bg-[#FFD500] p-2 rounded-lg cursor-pointer' size={36} strokeWidth={2} color="#000000" /></span>
                <CircleUserRound className='md:hidden' size={36} color="#000000" strokeWidth={1.5} />
                <button className='bg-[FFFFFF] text-xs text-black font-bold px-6 py-2 rounded-md border-2 border-[#cccccc] hover:bg-[#FFD500] transition-all duration-200 cursor-pointer hidden md:block'>Sign In / Register</button>
            </div>
        </header>
    )
}

export default Header