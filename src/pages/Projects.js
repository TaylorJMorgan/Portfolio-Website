import React from 'react';

import ProjectsCarousel from '../components/ProjectsCarousel';
import MotionWrapper from '../components/MotionWrapper';
import classes from './Projects.module.css';

const Projects = (props) => {
  return (
    <MotionWrapper>
      <h1 className={classes['page-title']}>PROJECTS</h1>
      <div className='row d-flex m-5 justify-content-center'>
        <ProjectsCarousel />
      </div>
    </MotionWrapper>
  );
};

export default Projects;
