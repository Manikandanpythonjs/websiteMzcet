'use client'

import React from 'react'
import { Box, IconButton, useBreakpointValue, Image } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    // These are the images used in the slide
    const cards = [
        'https://www.mzcet.in/images/banner/banner-2old.jpg',
        'https://www.mzcet.in/images/banner/banner-5.jpg',
        'https://www.mzcet.in/images/banner/banner-1.jpg',
        "https://www.mzcet.in/images/banner/banner-4.jpg"
    ]

    return (
        <Box position={'relative'} mt={-1} height={"full"} width={'full'} objectFit={'contain'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                background={"transparent"}
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                background={"transparent"}
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider  {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                    <Box>
                        <Image

                            key={index}
                            height={"100vh"}
                            // overflow={"hidden"}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="contain"
                            backgroundImage={`url(${url})`}
                        />
                    </Box>

                ))}
            </Slider>
        </Box>
    )
}