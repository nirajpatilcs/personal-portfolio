import React from 'react';

export default function Navlap(props){

    return (
        <nav className='nav-container'>
            <div className='navlap'>
                <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p> 
                <div className='links'>
                    {props.navLinks}
                </div>
            </div>
        </nav>
      
    )
}