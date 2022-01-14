import React from "react";
import logo from './logo.PNG'

export default function Logo() {
    return (
        <div className='navbar-logo'>
            <img src={logo} alt='logo' className="logo-img"/> 
            <p> &#60;devniraj/&#62; </p>
        </div> 
    )
}