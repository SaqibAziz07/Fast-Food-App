import Logo from '../assets/img/logo.png'
import { CircleUserRound, MapPinned, ShoppingBag } from 'lucide-react'

const Header = ({ cartCount, onCartClick }) => {
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

            <div className='flex items-center justify-center gap-4'>
               <div 
                 className='relative cursor-pointer' 
                 onClick={onCartClick}
               >
                    <ShoppingBag className='bg-orange-500 p-2 rounded-lg' size={36} strokeWidth={2} color="#fff" />
                    
                    {cartCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-white text-orange-500 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-orange-600 animate-bounce-short'>
                            {cartCount}
                        </span>
                    )}
                </div>
                <button className='bg-[FFFFFF] text-xs text-black font-bold px-6 py-2 rounded-md border-2 border-orange-400 hover:bg-orange-500 transition-all duration-200 cursor-pointer hidden md:block'>Sign In / Register</button>
            </div>
        </header>
    )
}

export default Header;