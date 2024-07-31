import React, { useEffect, useRef, useState, useCallback } from 'react'

const AnimatedLine = ({ lineBgColor, padding, margin, ...property }) => {
    const path = useRef(null)
    const [progress, setProgress] = useState(0)
    const [x, setX] = useState(0.5)
    const timeRef = useRef(Math.PI / 2)
    const reqIdRef = useRef(null)

    const setPath = useCallback((currentProgress) => {
        const { innerWidth } = window;
        const width = innerWidth * 0.87;
        path.current?.setAttributeNS("", "d", `M0 50 Q${width * x} ${50 + currentProgress}, ${width} 50`)
    }, [x])

    useEffect(() => {
        setPath(progress)
    }, [progress, setPath])

    const handleMouseEnter = () => {
        if (reqIdRef.current) {
            window.cancelAnimationFrame(reqIdRef.current);
            handleResetAnimation();
        }
    }

    const handleMouseMove = (e) => {
        const { movementY, clientX } = e;
        const { left, width } = path.current.getBoundingClientRect();
        setX((clientX - left) / width);
        setProgress(prev => prev + movementY);
    }

    const handleMouseLeave = () => {
        animateOut()
    }

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animateOut = () => {
        const newProgress = progress * Math.sin(timeRef.current);
        timeRef.current += 0.2;
        setPath(newProgress);
        setProgress(prev => lerp(prev, 0, 0.023))
        if (Math.abs(progress) > 0.75) {
            reqIdRef.current = window.requestAnimationFrame(animateOut);
        } else {
            handleResetAnimation()
        }
    }

    const handleResetAnimation = () => {
        timeRef.current = Math.PI / 2;
        setProgress(0);
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