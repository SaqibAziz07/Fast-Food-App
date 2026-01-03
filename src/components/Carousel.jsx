import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img1 from '../assets/img/carousel_3.jpg';
import img2 from '../assets/img/carousel_2.jpg';
import img3 from '../assets/img/carousel_1.jpg';

const Carousel = () => {
    return (
        <div className='w-full m-auto max-w-full'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                speed={1400}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img className='w-full ' src={img1} alt="Slide 1"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full ' src={img2} alt="Slide 2"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img className='w-full ' src={img3} alt="Slide 3"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;