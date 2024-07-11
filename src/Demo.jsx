import React, { useState, useEffect } from "react";
import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import { Video, Swipper } from "@chakra-ui/react";

const Demo = () => {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    const [images, setImages] = useState([
        {
            url: "https://source.unsplash.com/random/2000x1000",
            alt: "A random image",
        },
        {
            url: "https://source.unsplash.com/random/2000x1000",
            alt: "Another random image",
        },
        {
            url: "https://source.unsplash.com/random/2000x1000",
            alt: "One more random image",
        },
    ]);

    useEffect(() => {
        const playVideo = () => {
            const video = document.querySelector("video");
            video.play();
        };

        window.addEventListener("load", playVideo);

        return () => {
            window.removeEventListener("load", playVideo);
        };
    }, []);

    return (
        <ThemeProvider>
            <ChakraProvider>
                <Navbar>
                    <Navbar.Brand>My Landing Page</Navbar.Brand>
                </Navbar>
                <Video
                    src={videoUrl}
                    loop
                    muted
                    playsInline
                    autoPlay
                />
                <Swipper>
                    {images.map((image, index) => (
                        <Swipper.Item key={index}>
                            <img src={image.url} alt={image.alt} />
                        </Swipper.Item>
                    ))}
                </Swipper>
            </ChakraProvider>
        </ThemeProvider>
    );
};

export default Demo;
