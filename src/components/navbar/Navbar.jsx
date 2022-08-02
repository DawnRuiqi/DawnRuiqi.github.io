import React, { useState } from 'react';
import {FaGithub } from 'react-icons/fa';
import {FaLinkedin } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";


const Menu = () => (
  </*function*/>
  <p><a href='#home'>Home</a></p>
  <p><a href='#experience'>Experience</a></p>
  <p><a href='#resume'>Resume</a></p>
  <p><a href='#project'>Projects</a></p>
  <p><a href='#contact'>Contact</a></p>
  
  </>
)

const Links = () => (
  </*function*/>
  <p><a href='#contact'><FaLinkedin/></a></p>
  <p><a href='link'><FaGithub/></a></p>
  
  </>
)


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='web__navbar'>
      <div className='web__navbar-links'>
        <div className='web__navbar-links__container'>
        <Menu />
        <div className='web__logo-container'>
        <Links />
        </div>
        
        </div>
      </div>

      <div className='web__navbar-menu'>
      {toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /*"?" = if. ":" = else *//>
        }    
        
         {toggleMenu /*Only if the variable is true*/ && ( 
            <div className='web__navbar-menu__container scaple-up-center'>
                <div className='web__navbar-menu__container-links'>
                <Menu />
                <Links/>
                </div>
                <div className='web__logo'>
                
                </div>  
             </div>
              )}
      </div>
    </div>

    
  )
}

export default Navbar