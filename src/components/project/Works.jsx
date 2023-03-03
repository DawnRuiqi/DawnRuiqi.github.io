import React from 'react';
import Article from '../../components/article/Article';
import { projectFirst } from './import';
import "./projects.css";

const Works=() => {
  
  return (
    <div className='project section__padding' id='projects'>
        <div className='project-heading'>
            <h1>Projects</h1>

        </div>
        <div className='project-container'>
            <div className='project-container__groupA'>
                <Article imgUrl={projectFirst} title='Portflio Website' techstack = 'React, HTML/CSS, Javascript' desc='My first project which I design and created my work. This website is designed and created using HTML/CSS, React and Javascript.' />
            </div>
            
        </div>
    </div>
)
}

export default Works
/*
<div className='project-container__groupB'>
                <Article imgUrl={blog02} title='User Authentication' techstack='Django Framework, Python, HTML/CSS' desc='A user authentication project where users could use' />
               
            </div> */