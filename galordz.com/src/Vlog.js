import React from 'react'
import PostCard from './PostCard.js'
import ships_and_submarines from './imgs/ships_and_submarines.jpg'
import russia from './imgs/russia.jpg'
import galordz from './imgs/galordz.png'
import './css/Vlog.css'

function Vlog() {
    return (
        <div className="vlog">
            <PostCard
                postName="Ships and Submarines"
                postImage={ships_and_submarines} 
                postDate="Date: 17/09/2020"
                postDescription="The phisical and
                mechanical mechanisms that make ships
                and submarines work"
                link="/projects"

            />
            <PostCard
                postName="Learning Russian"
                postImage={russia} 
                postDate="Date: 20/08/2020"
                postDescription="Why and how I'm
                learning russian"
                link=""

            />
            <PostCard
                postName="Creating galordz.com"
                postImage={galordz} 
                postDate="Date: 16/05/2020"
                postDescription="How I created 
                galordz.com"
                link=""

            />

        </div>
    )
}

export default Vlog
