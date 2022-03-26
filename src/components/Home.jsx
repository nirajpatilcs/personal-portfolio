import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import Navlap from './Navlap'
import Button from './Button'
import AnimatedText from './AnimatedText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import NET from 'vanta/dist/vanta.net.min.js'
import * as THREE from 'three'

export default function Home(props) {
    const [loaderDone, setLoader] = useState(true)
    const [vantaEffect, setVantaEffect] = useState(0)
    const backgroundRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: backgroundRef.current,
                THREE: THREE, 
                // backgroundColor:"#1D1D1D", 
                backgroundColor: "#1D1D1D",
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                points: 5.00,
                spacing: 17.00,
                maxDistance: 26.00,
                color: "rgb(5,253,216)"

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])



    return(
            <div className='home-container' >    
                {/* main intro text */}
                <div className='intro-text-container'>
                    <div className='border-before'> </div> 
                    <div className='intro-text-wrapper'> 
                        {/* <h1> <AnimatedText str={'hello world,'}/></h1>
                        <h1> <AnimatedText str={"I'm "}/>
                        <span className='intro-text-span'>N</span>
                        <AnimatedText str={'iraj,'}></AnimatedText> </h1> */}

                        <h1>hello world,</h1>
                        <h1> I'm 
                        <span className='intro-text-span'> N</span>
                        iraj,</h1>
                        <p className='subtitle'>Software Engineer</p>
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
                <div className='home-aside' ref={backgroundRef} > 
                </div>

            </div> 
            
    )
}
