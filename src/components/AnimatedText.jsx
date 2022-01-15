import React from 'react'

export default function AnimatedText(props) {
    const animatedStr = [];
    let i=0;
    for(let s of props.str) {
        const sElement = <span key={i} className='intro-text'>{s}</span>;
        i++;
        animatedStr.push(sElement)
    }
    return (
        <span> 
            {animatedStr}
        </span>
    )
}