import React from 'react';

import { NavLink } from 'react-router-dom';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './Home.module.css';

const Home = (props) => {
  const handleClick = () => {
    props.setActive('about');
  };

  return (
    <MotionWrapper backgroundType='page-background--dark'>
      <div className={`flex row align-items-center ${classes['home-banner']}`}>
        <div className='col'>
          Hello, I'm&nbsp;
          <span className={`${classes['highlight--animated']}`}>
            Taylor Morgan
          </span>
          ,
          <br />
          a full-stack developer.
          <br />
          <NavLink to='/about'>
            <button
              className={`btn btn-outline-light btn-md ${classes['start-button']}`}
              onClick={handleClick}
            >
              Let's start.
            </button>
          </NavLink>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Home;
