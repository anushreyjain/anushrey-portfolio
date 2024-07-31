"use client"

import React, { useRef } from 'react'

import Card from './Card'
import { designShowCase } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { useScroll } from 'framer-motion';
import SectionHeading from './SectionHeading';

const DesignShowcase = () => {
    const { ref } = useSectionInView("Design Showcase");

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <div className='relative lg:px-20 lg:pt-20 pt-10 w-full'>
            <SectionHeading
                routeLink={'https://www.behance.net/anushreyjain'}
                title={'Design Allure'}
                linkLabel={'View all'}
                lineColor={'#09090B'}
                className="mb-7 lg:mb-10 max-w-[101.25rem] w-full mx-auto px-5" />
            <div ref={container} className='lg:mt-[10vh] lg:mb-[5vh]'>
                {designShowCase?.map((show, index) => {
                    const targetScale = 1 - ((designShowCase.length - index) * 0.04);
                    return <Card
                        key={index}
                        i={index}
                        {...show}
                        progress={scrollYProgress}
                        range={[index * 0.25, 1]}
                        targetScale={targetScale}
                    />
                })}
            </div>
        </div>
    )
}

export default DesignShowcase