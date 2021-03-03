import React from 'react'
import dr1 from '../imgs/dr1.jpg'
import dr2 from '../imgs/dr2.jpg'
import dr4 from '../imgs/dr4.jpg'
import dr5 from '../imgs/dr5.jpg'
import dr6 from '../imgs/dr6.jpg'
import dr7 from '../imgs/dr7.jpg'
import languages from '../imgs/languages.jpg'
import tres_banderas from '../imgs/tres_banderas.jpg'

function Post2() {
    return (
        <div className="post__content">
            <div class="article_Title_container">
                <div class="articleTitle">Learning Russian</div>
            </div>
            <div class="article_content_container">
                <p class="article_content">
                <strong>The reason</strong> 
                </p>
                <p class="article_content">
                Some experts in geopolitics say that in the coming years, the world will go from a 
                world dominated by the US to one dominated by the three current superpowers: The US,
                Russia, and China.
                </p>
                <p class="article_content">
                So, I thought that it will be very useful to learn the language of those three 
                superpowers in the future, as it happend with english when the US started to basically
                rule the world. So, I started to learn russian.
                </p>
                <p class="article_content">
                Before learning russian, I started to take pressential chinese classes, but it became 
                inconvenient. I was wasting a lot of time going and coming from there; and once, the 
                teacher told us that those classes were not enough to learn chinese.
                </p>
                <p class="article_content">
                I decided that, if I was going to learn a new language it would be by myself. But 
                chinese was a little bit complicated, so I choosed Russian this time. 
                </p>  
                <div class="Bimgs_container">
                <img src={tres_banderas} class="Bimgs1"/>
                </div>
                <p> <br/> </p>
                <p class="article_content">
                <strong>The begining</strong> 
                </p>
                <p class="article_content">
                Doing research about how to learn a new language, I realized that there were better
                methods to learn a language than trying to learn about the gramatics. Instead, there’s
                    something called “Comprehensible input” wich basically consists  on listening the 
                    target language in a way that you can understand it (not necessarly everything at 
                    the start) without the need of subtitles in your mother language or something like 
                    that.
                </p>
                <p class="article_content">
                An exaple of this could be that an apple appears on the screen, an then you listen the
                word for “apple” in the target language, or someone doing something and then, the word
                for the action in the target languge. Stuff like that.
                </p>
                <p class="article_content">
                In the first week, almost everything I studied was not about Russian language, but 
                abowt how to learn languages in general.
                </p>
                <p class="article_content">
                Then, I started watching comprehensible input on YoTube. In fact, the tool I use the
                most for learning is YouTube, and this would be no exeption.
                </p>
                <p class="article_content">
                After some videos, I realized that it was very hard to catch up the pronunciation of 
                words, an with that, the ability to search them individually. So I decided to learn 
                the russian alphabet and it’s pronunciation before continuing, and it was woth it.
                </p>
                <p class="article_content">
                To learn the alphabet, I took a notebook and sarted drawing animals and it’s name in 
                alphabetic order. I did this because I like animals and living stuff in general, so I 
                would memorize better the letters and it’s pronunciation if I had a good reason to. 
                </p>
                <p class="article_content">
                The russian alphabet has 33 letters, but I draw more than that. Here some of my 
                drawings:
                <br/> <br/>
                <div class="none">
                    <img src={dr7} height="300px" class="Bimg"/>
                    <img src={dr1} height="300px" class="Bimg"/>
                    <img src={dr2} height="300px" class="Bimg"/>
                    <img src={dr4} height="300px" class="Bimg"/>
                    <img src={dr5} height="300px" class="Bimg"/>
                    <img src={dr6} height="300px" class="Bimg"/>
                </div>
                </p>
                <p><br/></p>
                <p class="article_content">
                <strong>The next</strong>
                </p>
                <p class="article_content">
                Now I continue to watch comprehensible input videos, and Iv’e aquired a lot of 
                vocavulary that way. I´ve learned for example, the numbers, parts of ahouse, and very
                much other stuff.
                </p>
                <p class="article_content">
                Also I’ll hand-write some songs that I like, to learn the lyrics and the meaning while
                I have fun listening and singing those songs.
                </p>
                <p class="article_content">
                While my research about how to learn a language, one of the best advices I found was
                that it have to be fun, because learning a language, like life itself, is not a race,
                    but instead, is a maraton that really never ends.
                </p>
                <p class="article_content">
                <br/>
                <div class="Bimgs_container">
                <img src={languages} class="Bimgs1"/>
                </div>
                </p>

            </div>
        </div>

    )
}

export default Post2
