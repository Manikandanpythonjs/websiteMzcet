import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../Swipper/style.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Image } from '@chakra-ui/react';

export default function App() {
    return (
        <>
            <Swiper
                autoplay
                autoFocus
                loop
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image objectFit={"cover"} width={"full"} height={"full"} src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image objectFit={"cover"} width={"full"} height={"full"} src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image objectFit={"cover"} width={"full"} height={"full"} src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image objectFit={"cover"} width={"full"} height={"full"} src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
