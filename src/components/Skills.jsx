import React from 'react'
import AnimatedText from './AnimatedText'

export default function Skills() {
    return (
        <div className='info-container'> 
            {/* <div className='border-before s-b'> </div>  */}
            <h1 className='info-title'> <AnimatedText str={'SKILLS'}/></h1>
            {/* <div className='border-after s-b'> </div>  */}
            <p> I’m proficient with JavaScript(ES6+), React.js, HTML, CSS, Tailwind, RESTful API’s & Github</p>
        </div>
    )
}