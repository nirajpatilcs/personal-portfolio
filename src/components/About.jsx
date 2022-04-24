import React, { useEffect} from "react";
import AnimatedText from "./AnimatedText";
import myphoto from './myphoto.jpg';


export default function About() {

    return (
        <div className="info-container"> 
            <div className="about-wrapper">
                <h1 className="info-title about-title"> <AnimatedText str={'About Me'}/></h1>
                <p className="about-text">
                    I've been fascinated with technology and computers since early childhood, hence I've always wanted to work somewhere which involved the same. I picked up coding as an extra subject in highschool , instantly I was hooked to writing code and seeing it in action. I remember creating a console-based calculator in Python and to this day it stands to be one of my proudest pieces of work, as it was my first ever solo project. Throughout the past few years, I've had the opportunity to work on multiple projects and have gotten introduced to computational thinking and programming (writing beautiful code which follows the industry design conventions!), my love for technology has only grown ever since, it drives my passion for problem-solving and the ongoing desire to learn something new every day. 
                </p>
                {/* <p className="about-tr from-right">I've been passionate about </p>
                <p className="about-tl from-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quos voluptate itaque eligendi culpa rerum iure ut totam dicta quasi reprehenderit aliquid, exercitationem placeat saepe quas accusantium sequi dolorem ipsa ea nemo natus soluta suscipit fugiat magni. Obcaecati, ut omnis?</p> */}
                {/* <div className="my-photo">
                    <img src={myphoto} alt="my-photo" />
                </div>
                 */}
            </div>      
        </div>
    )
}