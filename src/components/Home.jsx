import React, { useState } from 'react'
import Navbar from './Navbar'
import logo from './logo.PNG'
import Navlap from './Navlap'
import Button from './Button'
import AnimatedText from './AnimatedText'

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
                <div className='intro-text-wrapper'> 
                    <h1> <AnimatedText str={'hello world,'}/></h1>
                    <h1> <AnimatedText str={"I'm "}/>
                    <span className='intro-text-span'>N</span>
                    <AnimatedText str={'iraj,'}></AnimatedText> </h1>
                    {/* <h1 className=''>hello world, </h1> */}
                    {/* <h1 className=''> I'm  <span className='intro-text-span'>N</span>iraj, </h1> */}
                    <p className='subtitle'>Frontend Developer</p>
                </div>
                <div className='border-after'> </div> 
                <Button str={'Get in touch!'}/>
            </div>
            
            <Navlap/>
            {/* only on large dispays */}
            <div className='home-aside'> 
                <img src={logo} alt='logo' className='intro-img'/> 
            </div>

        </div>
    )
}
