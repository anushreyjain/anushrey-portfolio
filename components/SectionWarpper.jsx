import React from 'react'
import SectionHeading from './SectionHeading'

const SectionWarpper = React.forwardRef(function SectionWarpper({
    routeLink,
    title,
    index,
    label,
    children,
    id,
    childrenClasses = '',
    wrapperClasses = '',
    linkLabel,
    ...property
}, ref) {
    return (
        <section
            className={`${wrapperClasses} relative w-full scroll-mt-10 lg:px-20 py-20 lg:py-32 ${property.className ?? ''}`}
            ref={ref}
            id={id}
        >
            <div className={`${childrenClasses} px-5 lg:px-10`}>
                <SectionHeading
                    routeLink={routeLink}
                    title={title}
                    index={index}
                    label={label}
                    linkLabel={linkLabel}
                    className="container-x mb-12 lg:mb-20" />
                <div className="container-x">
                    {children}
                </div>
            </div>
        </section>
    )
})

export default SectionWarpper
