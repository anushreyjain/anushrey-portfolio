import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import ShinyLink from './ShinyLink';


const Card = ({ i, title, imageSrc, progress, range, targetScale, linkToDesign }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const handleCardClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <div ref={container} className={`card-container flex items-center justify-center
     sticky top-0 h-[80vh] lg:h-[100vh] px-4 lg:px-0`}>
      <motion.div onClick={(e) => {handleCardClick(e, linkToDesign)}} style={{ scale, top: `calc(-10% +  ${i * 25}px)` }}
        className={`card w-full h-[19rem] lg:w-[75rem] lg:h-[43.75rem] cursor-pointer bg-[#09090B] 
          px-4 py-4 lg:py-5 lg:px-10 relative -top-[10%]  
      border border-neutral-700 rounded-2xl`}>
        <div className='flex items-center justify-between mb-5 lg:mb-6'>
          <h2 className="text-sm lg:text-2xl white-gradient-text font-semibold ">
            {title}
          </h2>
          <ShinyLink routeLink={linkToDesign} >
            {'View'}
          </ShinyLink>
        </div>
        <div className='relative w-full h-[80%] lg:h-[90%] overflow-hidden rounded-xl'>
          <motion.div style={{ scale: imageScale }} className='w-full h-full'>
            <Image src={imageSrc} alt='design' layout='fill' />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card