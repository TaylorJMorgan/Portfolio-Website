import React from 'react';

import ProjectsCarousel from './components/ProjectsCarousel';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './Projects.module.css';

const Projects = (props) => {
  return (
    <MotionWrapper backgroundType='page-background'>
      <h1 className={classes['page-title']}>PROJECTS</h1>
      <div className='m-5'>
        <ProjectsCarousel />
      </div>
    </MotionWrapper>
  );
};

export default Projects;