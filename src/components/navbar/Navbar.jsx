import React from "react";

import "./navbar.css"

const Menu = () => (
  </*function*/>
  <p><a href='#home'>Home</a></p>
  <p><a href='#experience'>Experience</a></p>
  <p><a href='#projects'>Projects</a></p>
  </>
)



function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-heading">
        <h1>RQ</h1>
      </div>
      <div className="navbar-links">
        <Menu />
      </div>
    </div>
  )
}


export default Navbar