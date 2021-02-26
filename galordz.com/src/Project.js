import React from 'react'
import './css/Project.css'

function Project({
    image,
    name,
    description,
    link
}) {
    return (
        <a href={link} className="project">
            <img src={image} className="project_image"/>
            <div className="project_text">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </a>
    )
}

export default Project
