import React, { useRef, useState, useEffect } from 'react';

function AutoScrollLoopContainer({ children }) {
    const containerRef = useRef(null);
    const scrollSpeed = 1; // Adjust this value for the scroll speed
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (container) {
                container.scrollTop += scrollSpeed * scrollDirection;

                if (scrollDirection === 1 && container.scrollTop >= container.scrollHeight - container.clientHeight) {
                    // When the end is reached, reset the scroll position and change direction to backward
                    container.scrollTop = 0;
                    setScrollDirection(-1);
                } else if (scrollDirection === -1 && container.scrollTop <= 0) {
                    // When the beginning is reached, reset the scroll position and change direction to forward
                    container.scrollTop = container.scrollHeight - container.clientHeight;
                    setScrollDirection(1);
                }
            }
        };

        const scrollInterval = setInterval(handleScroll, 30); // Adjust the interval as needed

        return () => {
            clearInterval(scrollInterval);
        };
    }, [scrollDirection]);

    return (
        <div
            ref={containerRef}
            style={{
                overflowY: 'scroll',


            }}
        >
            <div>
                {children}
            </div>
        </div>
    );
}

export default AutoScrollLoopContainer;