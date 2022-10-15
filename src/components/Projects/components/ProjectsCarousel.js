import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import classes from './ProjectsCarousel.module.css';
import projects from '../data/projects';
import Container from 'react-bootstrap/Container';

const ProjectsCarousel = (props) => {
  return (
    <Container>
      <Carousel interval={null}>
        {projects.map((project) => {
          return (
            <Carousel.Item>
              <a href={project.url}>
                <img
                  className='w-100'
                  src={require('../images/' + project.img + '.png')}
                  alt={props.label}
                />
              </a>
              <Carousel.Caption
                className={`${classes['carousel-caption__background']} d-none d-md-block px-5`}
              >
                <h3>{project.label}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ProjectsCarousel;
