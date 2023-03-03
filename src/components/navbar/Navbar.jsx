import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import "./navbar.css"

const Menu = () => (
  
  </*function*/>
  <p><a href='#home'>Home</a></p>
  <p><a href='#experience'>Experience</a></p>
  <p><a href='#projects'>Projects</a></p>
  </>
  
)
//BEM -> Block element modifier
function Navbar()  {
  const [toggleMenu, setToggleMenu] = useState(false) //showing mobile menu or not & function to change var
return (
  <div className='navbar'>
      
          <div className='navbar-heading'>
             <h1>RQ</h1>
          </div>
          <div className='navbar-links_container'>
          <Menu />
          </div>
      
      <div className='navbar-menu'>
          {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /*"?" = if. ":" = else *//>
      }    

       {toggleMenu /*Only if the variable is true*/ && ( 
          <div className='navbar-menu_container scaple-up-center'>
              <div className='navbar-menu_container-links'>
              <Menu />
              </div> 
           </div>
       )}
     </div>
  </div>
  
);
};


export default Navbar