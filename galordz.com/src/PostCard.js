import React from 'react'
import './css/PostCard.css'

function PostCard( {
    postName, 
    postImage, 
    postDate, 
    postDescription,
    link
    } ) {
    return (
        <a href={link} className="postCard">
            <h4 className="postName">{postName}</h4>
            <img src={postImage} className="postCardImg"></img>
            <p>{postDate}</p>
            <p>{postDescription}</p>
        </a>
    )
}

export default PostCard
