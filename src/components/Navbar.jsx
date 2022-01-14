import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'

export default function Navbar(props) {
    return (
        <nav className='navbar'> 

            <Logo/>
            { !props.displayItems &&
            <FontAwesomeIcon icon={faBars} onClick={props.toggleNav} className='navicon bars'/>
            }
            
            {/* cancel */}
            { props.displayItems &&
            <FontAwesomeIcon icon={faTimes} onClick={props.toggleNav} className='navicon cross'/>
            }
            {/* display when clicked on menubar */}
            { props.displayItems &&
                <div className="nav-wrapper" >
                    <ul className="navitems-list">
                        <li><a className="active" href="#">Home</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            }   
        </nav>
    )
}
