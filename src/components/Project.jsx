import React from "react";

export default function Project(props) {
    const skills = props.project.tech.map(t => {
        return(
            <span> {t}</span>
        )
    })
    return(
        <div className="project-card">
            <div className="project-img"></div>
            <h3 className="project-title">{props.project.title}</h3>
            <p className="project-text">{props.project.summary}</p>
            <p className="project-tags"> {skills}</p>
            <h1 className="project-id">0{props.project.id}</h1>
        </div>
    )
}