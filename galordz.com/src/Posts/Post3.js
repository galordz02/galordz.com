import React from 'react'
import archimedes from '../imgs/archimedes.jpg'
import archimedes2 from '../imgs/archimedes2.jpg'
import ship from '../imgs/ship.png'
import submarine from '../imgs/submarine.png'
import submarine2 from '../imgs/submarine2.png'

function Post3() {
    return (
        <div className="post__content">
            <div class="article_Title_container">
                <div class="articleTitle">Ships and Submarines</div>
            </div>
            <div class="article_content_container">
                <p class="article_content">
                In this post, I’ll explain the functioning of the main mechanisms of the ships and 
                submarines that enable them to float and submerge (in the case of submarines).
                </p>
                <p class="article_content">
                <strong>How does something float</strong>
                </p>
                <p class="article_content">
                When you introduce something into the water you are basically moving some water to 
                replace it’s place in space with that stuff you introduce; so you basically need to 
                move the same amount of water that occupy the space you occupy. 
                </p>
                <p class="article_content">
                And to move something, you need to apply some force over what you want to move, and 
                water is no exception. So then, the amount of force you’ll need to submerge 
                something into the water (force given by the weight of the object in this case) will 
                be directly related to the amount of water yo need to move.
                </p>
                <p class="article_content">
                Or in other words, “the upward bouyant force that is exerted on a body inmersed in a
                fluid, whether fully or partially submerged, is equal to the weight of the fluid 
                that the body displaces”; and this is known as the Archimedes’ principle.
                </p>
                <div class="Bimgs_container">
                <img src={archimedes} class="Bimgs1"/>

                </div>
                <p class="article_content">
                So, if you want to make something float on the water, you just have to make sure 
                that the weight of the stuff is less than the weight of the water that it would have
                to displace to be submerged.
                </p>
                <p class="article_content">
                Another way to say that, is by usinng the concept of density. Density is the mass 
                per unit volume, so if you want to make something float, you have to make sure that 
                the stuff you want to float has less density than water.
                </p>
                <div class="Bimgs_container">
                <img src={archimedes2} class="Bimgs1"/>

                </div>
                <p>
                <br/>
                </p>
                <p class="article_content">
                <strong>Ships</strong> 
                </p>
                <p class="article_content">
                So, following the Archimedes’ principle, for something to float is has to have less 
                density than water; but how can be a gigant piece of metal less dense than water? You 
                may ask; an the answer is in the shape of the ship.
                </p>
                <p class="article_content">
                The ship is designed in a way that occupies as much space as posible with the less 
                amount of material as possible to have less density than water. The ship does this 
                by letting a lot of empty space at the bottom.
                </p>
                <div class="Bimgs_container">
                <img src={ship} class="Bimgs1"/>

                </div>  
                <p>
                <br/>
                </p>
                <p class="article_content">
                <strong>Submarines</strong>
                </p>
                <p class="article_content">
                As ships, submarines can float, but they can submerge very deep in water due to 
                something called ballast tanks.
                </p>
                <p class="article_content">
                Ballast tanks are spaces that can be filled with air that accomplish the same 
                function as the empty space of ships, wich is to decrease the density of the 
                submarine. But the difference is that this ballast tanks can let water go inside, 
                replacing the air to increase the density of the submarine and in consequence, 
                submerge.
                </p>
                <div class="Bimgs_container">
                <img src={submarine} class="Bimgs1"/>

                </div>  
                <p class="article_content">
                The way submarines control the water that is inside, is by pushing air to the 
                ballast tanks to float or letting the air come back to it’s original place (due to 
                the water pressure) to submerge.
                </p>
                <div class="Bimgs_container">
                <img src={submarine2} class="Bimgs1"/>
                </div>

            </div>  
        </div>
    )
}

export default Post3
