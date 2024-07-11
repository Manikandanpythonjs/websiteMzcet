import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function Extra() {
    return (
        <>
            <Box>
                <Container>
                    <Heading
                        mt={10}
                        mb={5}
                        bg={"twitter.500"}
                        p={2}
                        px={3}
                        color={'white'}
                        rounded={'full'} textAlign={"center"}>

                        EXTRA ACTIVITY
                    </Heading>
                </Container>
                <Box maxW={"6xl"}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}

                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="https://img.freepik.com/premium-vector/mobile-otp-secure-verification-method-mobile-phone-hand-onetime-password-secure-transaction-security-one-time-password-verification-mobile-app-smartphone-screen-2step-verification_735449-279.jpg?size=626&ext=jpg" />
                            <Text>Student Portal</Text>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://img.freepik.com/free-vector/watercolor-photo-collage-design_52683-82542.jpg?size=626&ext=jpg" />
                            <Text>Gallery</Text>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?size=626&ext=jpg" />
                            <Text>Campus</Text>

                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg?size=626&ext=jpg" />
                            <Text>Feedback</Text>

                        </SwiperSlide>

                    </Swiper>
                </Box>



            </Box>

        </>
    );
}
