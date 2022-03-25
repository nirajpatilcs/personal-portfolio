import React, { useState } from 'react'
import Navbar from './Navbar'
import logo from './logo.PNG'
import Navlap from './Navlap'
import Button from './Button'
import AnimatedText from './AnimatedText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'

export default function Home(props) {
    const [displayState, setDisplayState] = useState(false)
    const [loaderDone, setLoader] = useState(true)

    function toggleNav() {
        setDisplayState(prev=>!prev)
    }

    return(
            <div className='home-container'>    
                <Navbar toggleNav={toggleNav} displayItems={displayState} navLinks={props.navLinks}/> 

                {/* main intro text */}
                <div className='intro-text-container'>
                    <div className='border-before'> </div> 
                    <div className='intro-text-wrapper'> 
                        <h1> <AnimatedText str={'hello world,'}/></h1>
                        <h1> <AnimatedText str={"I'm "}/>
                        <span className='intro-text-span'>N</span>
                        <AnimatedText str={'iraj,'}></AnimatedText> </h1>
                        <p className='subtitle'>Frontend Developer</p>
                    </div>
                    <div className='border-after'> </div> 

                    <div className="contact-links">
                        <Button str={'Get in touch!'}/>
                        <a href="https://github.com/nirajpatilcs" target='_blank'><FontAwesomeIcon  className='contact-btns' icon={faGithubSquare} /> </a>
                        <a href="https://www.linkedin.com/in/niraj-p/" target='_blank'><FontAwesomeIcon className='contact-btns' icon={faLinkedin} /></a> 
                    </div>

                </div>
                
                {/* <Navlap navLinks={props.navLinks} navFocus = {props.navFocus}/> */}
                {/* only on large dispays */}
                <div className='home-aside'> 
                    <img src={logo} alt='logo' className='intro-img'/> 
                </div>

            </div> 
    )
}
