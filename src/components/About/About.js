import taylorBird from './images/taylorBird.jpg';
import AboutCard from './components/AboutCard';
import SkillBar from './components/SkillBar';
import skills from './data/skills';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './About.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ResumeCard from './components/ResumeCard';

const About = (props) => {
  return (
    <MotionWrapper backgroundType='page-background'>
      <section id='about'>
        <Row>
          <h1 className={classes['page-title']}>ABOUT</h1>
        </Row>
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              className='d-flex align-items-stretch mb-4'
            >
              <AboutCard
                imgSrc={taylorBird}
                title="Taylor Morgan"
                content="Highly skilled and motivated full-stack developer with expertise in a wide range of technologies. Successfully developed dynamic and innovative projects utilizing a full-stack approach, working solo or leading front-end development efforts. Completed computer science courses from Harvard University and Udemy. A former Primary Care Paramedic with exceptional leadership, communication, and organizational skills."
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
                title='Languages and Technologies'
                content='I put forward a continuous effort to perfect existing skills and try new and interesting technologies.'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ResumeCard />
            </Col>
          </Row>
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default About;
