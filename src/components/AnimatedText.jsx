import React from 'react'

export default function AnimatedText(props) {
    const animatedStr = [];
    for(let s of props.str) {
        const sElement = <span className='intro-text'>{s}</span>;
        animatedStr.push(sElement)
    }
    return (
        <span> 
            {animatedStr}
        </span>
    )
}