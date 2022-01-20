import React from 'react';

export default function Navlap(){
    return (
        <div className='navlap'>
            <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p> 
            <div className='links'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href='#projects' className='project-btn'> Projects</a>
            </div>
        </div>
    )
}