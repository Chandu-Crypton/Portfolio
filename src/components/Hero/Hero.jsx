import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
const Hero = () => {
  return (
          
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate FrontEnd Developer | Transforming Ideas into Seamless and
                Visually Stunning Web Solutions
            </p>
         </div>

         <div className='hero-img'>
            <div>
               <div className='tech-icon'>
                <img src='./images/react.svg' alt='scenario'/>
               </div>
               <div className='cartoon'>
                 <img src="./images/img04.png" alt="scenario"/>
                 </div>
            </div>


           <div>
              <div className='tech-icon'>
                <img src="./images/img01.png.png" height="32" width="35.3" alt='scenario'/>
              </div>
              <div className='tech-icon'>
                <img src="./images/img02.png.png" alt='scenario'/>
              </div>
             <div className='tech-icon'>
               <img src="./images/img03.png.png" alt='scenario'/>
              </div>
           </div>
         </div>
      
    </section>
  )
}
          

export default Hero
