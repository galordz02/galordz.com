import React from 'react'
import Project from './Project'
import atm from './imgs/atm.png'
import Silentmoves from './imgs/Silentmoves.png'
import youtube_clone from './imgs/youtube_clone.png'
import './css/Projects.css'

function Projects() {
    return (
        <div className="projects">
            <Project
                image= {youtube_clone}
                name="Youtube clone"
                description="A little youtube clone"
                link="https://clone-46f2c.web.app"
            />
            <Project
                image= {atm}
                name="ATM"
                description="An atm simulator"
                link=""
            />
            <Project
                image= {Silentmoves}
                name="Silentmonsters"
                description="Just monsters you can
                move (desktop)"
            />

        </div>
    )
}

export default Projects
