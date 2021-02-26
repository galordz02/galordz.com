import React from 'react'
import './css/Sections.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Sections() {
    return (
        <div className="sections">
        
            <Link to="/projects" className="section one">
                <div className="section__title one">
                    Projects
                </div>
                <div className="section__description one">
                    Different projects that I've made
                    as my portfolio
                </div>
            </Link>
            <Link to="/vlog" className="section two">
                <div className="section__title two">
                    Vlog
                </div>
                <div className="section__description two">
                    My personal vlog, where I share
                    some of my thoughts and 
                    experiences learning stuff
                </div>
            </Link>
            
        </div>
    )
}

export default Sections
