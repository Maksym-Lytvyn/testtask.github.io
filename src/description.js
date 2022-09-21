import React from 'react';
import bckd from './bckd_img.jpg';
import './description.css';

function Description() {
    return(
      <div>
        <div className='container'>
            <img src={bckd} className='bckd-img' alt="background_image" />
            <div class="text-block">
                <h4>Text assignment for front-end developer</h4>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button className='btn'>Sign up</button>
            </div>
        </div>
        
    </div>  
    )  
} 
export default Description;