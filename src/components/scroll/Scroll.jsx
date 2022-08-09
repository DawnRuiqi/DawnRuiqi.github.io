import React from "react";
import CV from '../../assets/CV.pdf';
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFileEarmarkText} from "react-icons/bs";

import "./scroll.css"


function Scroll() {

  return (
  
      <div className="scroll-icons">
      <div className="scroll-list">
        <ul className="social-lists">
          <div className="linkedin-box">
            <li><a href="https://www.linkedin.com/in/rui-qi-367ab21aa/"><FaLinkedinIn/></a></li>
          </div>
          <div className="github-box">
            <li><a href="https://github.com/DawnRuiqi/"><FaGithub/></a></li>
          </div>
          <div className="email-box">
            
            <li><a href="mailto:tayruiqi99@gmail.com"><HiOutlineMail/><openMyWindow/></a></li>
            
          </div>
          <div className="resume-box">
            <li><a href={CV} target='_blank' rel="noreferrer"><BsFileEarmarkText/></a></li>
          </div> 
        </ul>
      </div>

    </div>


    
  )
}

export default Scroll