// import React from 'react'
// import { motion, useAnimationControls } from 'framer-motion'

// const RubberBandText = ({ word }) => {
//     const letterControls = word.split('').map(() => useAnimationControls());

//     const rubberBandEffect = (index) => {
//         letterControls[index].start({
//             transform: [
//                 'scale3d(1,1,1)',
//                 'scale3d(1.4,.55,1)',
//                 'scale3d(.75,1.25,1)',
//                 'scale3d(1.25,.85,1)',
//                 'scale3d(.9,1.05,1)',
//                 'scale3d(1,1,1)',
//             ],
//             transitions: [0, .4, .6, .7, .8, .9]
//         });
//     }

//     return (
//         <div>
//             {word.split('').map((letter, index) => (
//                 <motion.span
//                     animate={letterControls[index]}
//                     onMouseOver={() => rubberBandEffect(index)}
//                     key={index}
//                     className='text-xl lg:text-5xl inline-block font-medium'
//                 >
//                     {letter === " " ? '\u00A0' : letter}
//                 </motion.span>
//             ))}
//         </div>
//     )
// }

// export default RubberBandText