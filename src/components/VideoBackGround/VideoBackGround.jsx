// src/components/BackgroundVideo.js
import React from 'react';
import "./style.css"
import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';

const VideoBackGround = () => {
    return (
        <Box className='hero' width={"full"} height={"100vh"} >


            <Box className='overlay' display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Box padding={10}>

                    <Heading fontSize={{ base: "2xl", md: "5xl" }} color={"#fff"}>A place to fulfill one’s dreams </Heading>
                    <br />
                    <Text fontSize={{ base: "1xl", md: "3xl" }} color={"#fff"}>
                        The college is dedicated in transforming the students of rural area and enabling them to compete with the students from city side.
                    </Text>
                    <br />
                    <Button colorScheme='twitter'>Apply Online</Button>

                </Box>



            </Box>
            <video autoPlay loop muted src={require("../../assets/video/dropvideo.mp4")}>


            </video>





        </Box>
    );
};

export default VideoBackGround;
