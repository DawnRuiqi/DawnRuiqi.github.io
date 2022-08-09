import React, {useState} from 'react';
import { sliderData } from './import';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./projects.css";

function Works({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className='project-main' id='projects'>
      <div className="project-content">
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
         
          <section className='project-image'>
          {sliderData.map((slide, index) => {
            return (
              
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}>
                {index === current && (
                  <>
                  <img src={slide.image} alt="projects" className='image-projects' />
                  <div className='slide-text'>
                    <h2 className='slide-heading'>{slide.heading}</h2>
                    <p className='slide-text'>{slide.desc}</p>
                    <a href='https://github.com/DawnRuiqi/portweb.git'>Github</a>
                  </div>
                  </>
                  
                )}
                
              </div>
            );
          })}
          </section>
        </div>
     </div>
    </div>
  )
}

export default Works