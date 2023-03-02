import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, techstack, desc }) => {
  return (
    <div className='project-container__article'>
      <div className='project-container__article-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='project-container__article-content'>
        <div>
            <p>{title}</p>
            <h3>{desc}</h3>
            <p1>{techstack}</p1>
        </div>
        <a href="https://github.com/DawnRuiqi/portweb">Source code</a>
      </div>
    </div>
  )
}

export default Article