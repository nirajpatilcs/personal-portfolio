import React from "react";
import photo from "./projectken.png"
import photo1 from "./projectPortfolio.png"

export default function Project(props) {
    const skills = props.project.tech.map((t,i) => {
        return(
            <span key={i}> {t}</span>
        )
    })

    return(
        <div className="project-card" >
            <div className="project-overlay"> </div>
            {
                props.project.id == 1 
                ? <img className="project-img" src={photo1}></img>
                : <img className="project-img" src={photo}></img>
            }
            
            <h3 className="project-title">{props.project.title}</h3>
            <p className="project-text">{props.project.summary}</p>
            <p className="project-tags"> {skills}</p>
            <h1 className="project-id">0{props.project.id}</h1>     
        </div>
    )
}