import React from 'react'
import SectionHeading from './SectionHeading'

const SectionWarpper = ({
    routeLink,
    title,
    lineColor,
    children,
    ref,
    id,
    childrenClasses,
    wrapperClasses,
    linkLabel,
    ...property
}) => {
    return (
        <section
            className={`${wrapperClasses} relative overflow-hidden leading-8 
            lg:px-20 lg:min-h-screen lg:pt-20 pt-10 w-full ${property.className}`}
            ref={ref}
            id={id}
        >
            <div className={`h-full ${childrenClasses} px-5 lg:px-10 flex flex-col justify-center`}>
                <SectionHeading
                    routeLink={routeLink}
                    title={title}
                    linkLabel={linkLabel}
                    lineColor={lineColor}
                    className="mb-7 lg:mb-10 max-w-[101.25rem] mx-auto w-full" />
                <div className='pt-6 pb-20 lg:pt-12 lg:pb-24'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionWarpper