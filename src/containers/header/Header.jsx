import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import Rq from "../../assets/Rq.jpg";
import "./header.css"

 
function Header() {
  return (
    <div className="web__header section" id="home">
      <div className="web__header-content">
        <div /*empty div*/ />
        <h1 className="gradient__text">About Me</h1>
          <p>Hello, my name is Rui Qi. <br/> I am eager in learning programming and IT. <br/>
              <br/>I describe myself a creative and innovative person
              who love to give ideas and willing to share what I know to others as well!<br/><br/></p>
            <h2>Language that I am experience with: <br/></h2>
      </div>    
      <div className="lang">
        <div className="web__lang">
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;C#</p>
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;C/C++ </p>
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;Python</p>
          </div>
          
          <div className="web__lang">
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;HTML/CSS</p>
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;React.Js</p>
                <p> <AiOutlineCaretRight color="#CCD2E3"/> &nbsp;Javascript</p>
          </div>
      </div> 
      <div className="profile">
        <img src={Rq} alt='Rq' />
      </div>
    </div>
  )
}

export default Header