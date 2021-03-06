import React from "react";
import AnimatedText from "./AnimatedText";
import Project from './Project';
import data from '../projectsData'

export default function Projects() {
    const projects = data;
    const displayProjects = projects.map(project => {
        return (
            <Project key={project.id} project={project}/>
        )
    })

    return(
        <div className="info-container">
            <div className="projects-wrapper">
                <h1 className="projects-title"><AnimatedText str={"Some Projects I've Done"}/></h1>
                <div className="projects-container">
                    {displayProjects}
                </div>
            </div> 
        </div>
    )
}