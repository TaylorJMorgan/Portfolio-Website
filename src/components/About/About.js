import React from 'react';

import taylorBird from './images/taylorBird.jpg';
import AboutCard from './components/AboutCard';
import SkillBar from './components/SkillBar';
import skills from './data/skills';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './About.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const About = (props) => {
  return (
    <MotionWrapper backgroundType='page-background'>
      <div className='d-flex flex-column'>
        <section id='about'>
          <h1 className={classes['page-title']}>ABOUT</h1>
          <Container>
            <Row className='justify-content-center'>
              <Col
                xs={12}
                md={6}
                className='d-flex align-items-stretch mb-4'
              >
                <AboutCard
                  imgSrc={taylorBird}
                  title="That's Me."
                  subtitle='The guy, not the bird.'
                  content="I'm a Junior Full Stack Developer. I am pivoting careers into Web Development from Prehospital Medical Care."
                />
              </Col>
              <Col
                xs={12}
                md={6}
                className='d-flex align-items-stretch mb-4'
              >
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
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </MotionWrapper>
  );
};

export default About;