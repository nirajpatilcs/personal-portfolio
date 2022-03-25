import React from "react";

export default function Navbar(props) {
    return (
        <nav className='navbar'> 
            <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p> 

            <div className={`nav-wrapper`}>
                <div className='links'>
                    {props.navLinks}
                </div>
            </div> 
        </nav>
    )
}
