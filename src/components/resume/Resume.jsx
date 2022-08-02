import React from 'react';
import CV from '../../assets/CV.pdf';
import "./resume.css";

function Resume() {
  return (
    <div className='web__resume section' id='resume'>
      <div className='web__resume-content'>
      <div className='lines-resume'>
        <div /*empty div*/ />
      </div>
      <h1 className="gradient__text">Resume</h1>
      <div className='download__resume'>
        
        <a href={CV} target='_blank'>Click here to view my resume!</a>
      </div>

      </div>
      
    </div>
  
  )
}

export default Resume