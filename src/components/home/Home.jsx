import React from "react";
import CV from '../../assets/CV.pdf';

import "./home.css"


function Home() {
  return (
    <div className="home-main section__padding" id="home">
      <div className="home-content">
      <div className="home-title">
        <h1>Hi, <span>Dawn</span> here!</h1>
      </div>
      <div className="home-bio">
        <p>Hello, my name is Dawn,
           I have a strong interest in programming and information technology.<br/><br/>
           I describe myself as a creative and innovative individual who loves to bring fresh ideas to the table.<br/>
           
          Languages and libraries that I am experienced with:</p>   
          <span>React.Js, HTML/CSS, Javascript, C#, C, Python</span>
      </div>
      <div className="home-resume">
            <div className="rectangle">
            <p>View Resume!</p>
              <a href={CV} target='_blank' rel="noreferrer">
                <span className="linking"></span>
              </a>
              
            </div>
           </div>
           
      </div>




    </div>
  )
}

export default Home