import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={"auto"}
                centeredSlides={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className='w-full h-[460px] px-20 mb-[10px]'
            >
                <SwiperSlide className="w-full h-[460px] px-2">
                    <img className="w-full h-full object-cover rounded-[10px]" src="https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full h-[460px] px-2'>
                    <img className="w-full h-full object-cover rounded-[10px]" src="https://t3.ftcdn.net/jpg/07/11/98/78/360_F_711987860_gjr8VZVIJrFJH2Royf6rXkyeVSfBBVdL.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full h-[460px] px-2'>
                    <img className="w-full h-full object-cover rounded-[10px]" src="https://as2.ftcdn.net/v2/jpg/02/57/54/37/1000_F_257543757_xdx9838dayUXPgLJhIXLVwAdivJX8KEw.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;
