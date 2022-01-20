import React from 'react'
import AnimatedText from './AnimatedText'

export default function Skills() {
    return (
        <div className='info-container'> 
            <div className="skills-wrapper">
                <h1 className='info-title skills-title'> <AnimatedText str={'Skills'}/></h1>
                <p className='skills-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo fugit voluptates iusto odio nihil magnam, quis possimus minus, aspernatur excepturi ab sunt molestias totam. I’m proficient with JavaScript(ES6+), React.js, HTML, CSS, Tailwind, RESTful API’s & Github</p>
                <span className='skills-line'></span>
            </div>
        </div>
    )
}