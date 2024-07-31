import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import useMediaQuery from '@/hooks/useMediaQuery';

const MagneticButton = ({ children, ...property }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const isMobileOrTablet = useMediaQuery('(max-width: 1024px)');

    const handleMouseMove = (e) => {
        if (isMobileOrTablet) return; // Don't update position if on mobile or tablet
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            className={`${property.className}`}
            animate={isMobileOrTablet ? {} : { x, y }}
            transition={isMobileOrTablet ? {} : { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
}

export default MagneticButton