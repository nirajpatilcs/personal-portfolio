import React, { useState, useLayoutEffect } from 'react'
import Navbar from './Navbar'
import logo from './logo.PNG'
import Navlap from './Navlap'

export default function Home() {
    const [displayState, setDisplayState] = useState(false)

    function toggleNav() {
        setDisplayState(prev=>!prev)
    }

    return(
        <div className='home-container'> 
           
            <Navbar toggleNav={toggleNav} displayItems={displayState}/>

            {/* main intro text */}
            <div className='intro-text-container'>
                <div className='border-before'> </div> 
                <div className='intro-text'> 
                    <h1 className=''>hello world, </h1>
                    <h1 className=''> I'm  <span className='intro-text-span'>N</span>iraj, </h1>
                    <p className='subtitle'>Frontend Developer</p>
                </div>
                <div className='border-after'> </div> 
            </div>


            {/* only on large dispays */}
            <div className='home-aside'> 
                <Navlap/>
                <img src={logo} alt='logo' className='intro-img'/> 
            </div>

        </div>
    )
}
