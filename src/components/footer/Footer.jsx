import React from 'react';
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import "./footer.css";

function Footer() {
  return (
    <div className='footer-content'>
      <div className='footer-note'>
        <h1>Build and design by Tay Rui Qi</h1>
        <h1>All rights reserved. ©</h1>
        <div className='footer-icons'>
          <ul>          
            <li className='linkedin'><a href="https://www.linkedin.com/in/rui-qi-367ab21aa/"><FaLinkedinIn/></a></li>
            <li className='github'><a href="https://github.com/DawnRuiqi/"><FaGithub/></a></li>
            <li className='email'><a href="mailto:tayruiqi99@gmail.com"><HiOutlineMail/></a></li></ul>
            <a target="_blank" href="https://icons8.com/icon/jyHx6iyJUlXz/open-pokeball">Open Pokeball icon by </a> <a target="_blank" class="highlight" href="https://icons8.com">Icons8</a>
        </div>
        
      </div>
    </div>
  )
}

export default Footer