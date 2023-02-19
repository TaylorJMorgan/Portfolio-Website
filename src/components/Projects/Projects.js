import React from 'react';

import MotionWrapper from '../UI/MotionWrapper';
import classes from './Projects.module.css';
import ProjectBody from './components/ProjectBody';

const Projects = (props) => {
  return (
    <MotionWrapper backgroundType='page-background'>
      <section id='projects'>
        <h1 className={classes['page-title']}>PROJECTS</h1>
        <div className='m-2'>
          <ProjectBody />
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Projects;
