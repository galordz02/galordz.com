import React from 'react'
import '../css/Posts.css'

function Post1() {
    return (
        <div className="post__content">
            <div class="article_Title_container">
                <div class="articleTitle">Creating galordz.com</div>
            </div>
            <div class="article_content_container">
                <p class="article_content">
                The idea of creating this website came fom a course of personal branding that I took while starting at learning about 
                software. The original idea was to create a blog, but I decided that it would be more convinient to create a whole website
                to prove my web developer skills, and to have more space to show what I've done.
                </p>
                <p class="article_content">
                    First, I took some other courses about web developing, but one problem that I had was the missing information about how to
                    making a website public; I mean, everything in the courses was about making the website files, but they never told how you 
                    could bring those files to the internet; so I had to make a little research about it.
                </p>
                <p class="article_content">
                    So, I discovered that first, you have to buy a domain, wich is basically the name of your website. Then you have to acquire 
                    a hosting, wich is the server(computer) where all your website files are going to stay. Fortunately, you can have a 
                    completely free hosting if you don't have so much information to be stored.
                </p>
                <p class="article_content">
                    Finnaly, you need to link both, your hosting to your domain, and woala! You have a website that any person in the world can 
                    visit.
                </p>
                <p class="article_content">
                    So, that's how I made this website; but this is really not the end, because there are a lot of changes that I would like to do.
                </p>

            </div>

        </div>
    )
}

export default Post1
