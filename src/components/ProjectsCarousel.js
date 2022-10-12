import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import classes from './ProjectsCarousel.module.css';
import projects from './data/projects';

const ProjectsCarousel = (props) => {
  return (
    <Carousel interval={null}>
      {projects.map((project) => {
        return (
          <Carousel.Item>
            <a href={project.url}>
              <img
                className='d-block w-100'
                src={require('../images/' + project.img + '.png')}
                alt='First slide'
              />
            </a>
            <Carousel.Caption
              className={classes['carousel-caption__background']}
            >
              <h3>{project.label}</h3>
              <p>{project.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ProjectsCarousel;
