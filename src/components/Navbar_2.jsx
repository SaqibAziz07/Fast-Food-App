import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const Navbar_2 = () => {
    const categories = [
        { id: 1, name: 'NEW ARRIVAL' },
        { id: 2, name: 'PIZZAS' },
        { id: 3, name: 'SANDWICH' },
        { id: 4, name: 'LOADED FRIES' },
        { id: 5, name: 'CHICKEN WINGS' },
        { id: 6, name: 'HANDCUT FRIES' },
        { id: 7, name: 'SEA FOOD' },
        { id: 8, name: 'SWEET TRATS' },
        { id: 9, name: 'COLD BREWS' },
        { id: 10, name: 'EXTRAS AND DRINKS' }
    ];

    return (
        <div className='max-w-[1440px] bg-[#e5bf00] py-3 lg:py-6 px-4 md:px-20 mx-auto relative'>
        <Swiper
            modules={[FreeMode, Mousewheel, Autoplay]}
            spaceBetween={10}
            slidesPerView={2.5}
            freeMode={true}
            mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
            }}
            speed={1000}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                480: { slidesPerView: 3, spaceBetween: 15 },
                640: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
            className="mySwiper"
        >
            {categories.map((cat) => (
                <SwiperSlide key={cat.id} className="flex justify-center">
                    <div className="cursor-pointer group">
                        <p className="font-bold md:text-sm whitespace-nowrap text-white group-hover:text-black transition-colors">
                            {cat.name}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default Navbar_2;