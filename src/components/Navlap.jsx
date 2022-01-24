import React from 'react';

export default function Navlap(props){

    

    // const addClass = () => {
        
    // }

    return (
        <nav className='nav-container'>
            <div className='navlap'>
                <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p> 
                <div className='links'>
                    {/* <a href="#home" onClick={props.navFocus}>Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href='#projects' className='active-btn'> Projects</a> */}
                    {props.navLinks}
                </div>
            </div>
        </nav>
      
    )
}