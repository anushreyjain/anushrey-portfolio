import React, { useEffect, useRef, useState } from 'react'

const AnimatedLine = ({lineBgColor, padding, margin, ...property}) => {
    const path = useRef(null)
    let progress = 0
    let time = Math.PI / 2;
    let reqId = null
    let x = 0.5

    useEffect(() => {
        setPath(progress)
    }, [])

    const setPath = (progress) => {
        const { innerWidth } = window;
        const width = innerWidth * 0.87;
        path.current.setAttributeNS("", "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50`)
    }

    const handleMouseEnter = () => {
        if (reqId) {
            window.cancelAnimationFrame(reqId);
            handleResetAnimation();
        }
    }


    const handleMouseMove = (e) => {
        const { movementY, clientX } = e;
        const { left, width } = path.current.getBoundingClientRect();
        x = (clientX - left) / width;
        progress += movementY;
        setPath(progress)
    }

    const handleMouseLeave = () => {
        animateOut()
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        time += 0.2;
        setPath(newProgress);
        progress = lerp(progress, 0, 0.023)
        if (Math.abs(progress) > 0.75) {
            reqId = window.requestAnimationFrame(animateOut);
        } else {
            handleResetAnimation()
        }

    }

    const handleResetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }

    return (
        <div className={`relative ${padding} ${margin} ${property.className}`}>
            <div className='line'>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`box`}></div>
                <svg>
                    <path fill={lineBgColor} ref={path}></path>
                </svg>
            </div>
        </div>

    )
}

export default AnimatedLine;