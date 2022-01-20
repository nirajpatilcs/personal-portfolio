import React from "react";
import AnimatedText from "./AnimatedText";
import logo from './logo.PNG'

export default function() {
    return (
        <div className="info-container"> 
            <div className="about-wrapper">
                <h1 className="info-title about-title"> <AnimatedText str={'About Me'}/></h1>
                <p className="about-tr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo beatae dolorem delectus nobis voluptate fugiat quasi sit repellendus nihil ipsa facere, neque hic incidunt quis velit perferendis nisi itaque, libero rerum eaque. Iste nam cumque, iusto dolorem iure blanditiis suscipit praesentium fugiat reiciendis aut laborum dolore, dolorum deleniti assumenda?</p>
                <p className="about-tl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quos voluptate itaque eligendi culpa rerum iure ut totam dicta quasi reprehenderit aliquid, exercitationem placeat saepe quas accusantium sequi dolorem ipsa ea nemo natus soluta suscipit fugiat magni. Obcaecati, ut omnis?</p>
                <img src={logo} alt="photo" className="my-photo"/>
            </div>      
        </div>
    )
}