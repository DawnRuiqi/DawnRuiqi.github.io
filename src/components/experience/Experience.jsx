import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div className="experience-main section__padding" id="experience">
      <div className="experience-content">
        <div className="experience-title">
          <h1>Experience</h1>
        </div>

        <div className="exp1">
          <h2>ST Engineering | Assistant Engineer</h2>
          <ul className="menu-drop1">
              <li>Perform design and enhancement of command and control systems</li>
              <li>Perform software application immplementation, integration, deployment and troubleshoot</li>
              <li>Conduct testing to evaluate the capability of the software and determines the expected results for customers</li>
          </ul>
        </div>  

        <div className="exp2">
          <h2>Skill Samurai Singapore | Associate Teacher</h2>
            <ul className='menu-drop2'>
              <li>Coding instructor for kids</li>
              <li>Review assignments</li>
              <li>Teach the students how to create and design their game using coding </li>
              <li>Work with students to help them understand the codes</li>
            </ul>
        </div>
        
        <div className="exp3">
        <h2>Endofotonics | Software Engineering Intern </h2>
          <ul className='menu-drop3'>
            <li>Develop and build UI using C#</li>
            <li>Create unit test codes</li>
            <li>Create and review software documents</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience