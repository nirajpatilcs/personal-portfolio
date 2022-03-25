import React from 'react';

export default function Navlap(props){

    return (
        <nav className='nav-container'>
            <div className='navlap'>
                
                <div className='links'>
                    {props.navLinks}
                </div>
            </div>
        </nav>
      
    )
}