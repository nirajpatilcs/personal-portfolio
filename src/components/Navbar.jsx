import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
    return (
        <nav className='navbar'> 

            <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p> 

            { !props.displayItems &&
            <FontAwesomeIcon icon={faBars} onClick={props.toggleNav} className='navicon bars'/>
            }
            
            {/* cancel */}
            { props.displayItems &&
            <FontAwesomeIcon icon={faTimes} onClick={props.toggleNav} className='navicon cross'/>
            }
            {/* display when clicked on menubar */}
            
            <div className={`nav-wrapper ${props.displayItems && 'open-nav'} `} >
                {/* <p className='logo-txt'><span className='intro-text-span'>N</span> &#60;devniraj/&#62;</p>  */}
                {/* <ul className="navitems-list">
                    <li onClick={props.toggleNav}><a className="active" href="#home">Home</a></li>
                    <li onClick={props.toggleNav}><a href="#about">About</a></li>
                    <li onClick={props.toggleNav}><a href="#skills">Skills</a></li>
                    <li onClick={props.toggleNav}><a href="#projects">Projects</a></li>   
                </ul> */}
                <div className='navlap'>
                    
                    <div className='links'>
                        {props.navLinks}
                    </div>
                </div>
            </div> 
        </nav>
    )
}
