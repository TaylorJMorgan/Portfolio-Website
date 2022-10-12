import React from 'react';

import taylorBird from '../images/taylorBird.jpg';
import AboutCard from '../components/AboutCard';
import SkillBar from '../components/SkillBar';
import skills from '../components/data/skills';
import MotionWrapper from '../components/MotionWrapper';
import classes from './About.module.css';

const About = (props) => {
  return (
    <MotionWrapper>
      <section id='about'>
        <h1 className={classes['page-title']}>ABOUT</h1>
        <div className='row justify-content-center'>
          <div className='d-flex col-sm-8 col-md-6 align-items-stretch flex-md-row-reverse'>
            <AboutCard
              imgSrc={taylorBird}
              title="That's Me."
              subtitle='The guy, not the bird.'
              content="I'm a Junior Full Stack Developer. I only just recently transitioned into Web Development from Prehospital Medical Care."
            />
          </div>
          <div className='d-flex col-sm-8 col-md-6 align-items-stretch'>
            <AboutCard
              body={skills.map((skill) => {
                return (
                  <SkillBar
                    skillName={skill.name}
                    width={skill.width}
                  />
                );
              })}
              title='My Skills.'
              subtitle='They hopefully pay the bills.'
              content='I am always trying to learn new skills and better the ones I already have.'
            />
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default About;
