import React, { useEffect} from "react";
import AnimatedText from "./AnimatedText";
import myphoto from './myphoto.jpg'

export default function About() {

    return (
        <div className="info-container"> 
            <div className="about-wrapper">
                <h1 className="info-title about-title"> <AnimatedText str={'About Me'}/></h1>
                <p className="about-tr from-right">I've been passionate about </p>
                <p className="about-tl from-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quos voluptate itaque eligendi culpa rerum iure ut totam dicta quasi reprehenderit aliquid, exercitationem placeat saepe quas accusantium sequi dolorem ipsa ea nemo natus soluta suscipit fugiat magni. Obcaecati, ut omnis?</p>
                <div className="my-photo">
                    <img src={myphoto} alt="my-photo" />
                </div>
                
            </div>      
        </div>
    )
}