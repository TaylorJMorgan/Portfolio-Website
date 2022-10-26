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
                title="That's Me."
                content="I'm a Junior Full Stack Developer. I am pivoting careers into Software Development from Prehospital Medical Care."
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
                content='I am always trying to learn new skills and better the ones I already have.'
              />
            </Col>
          </Row>
        </Container>
      </section>
    </MotionWrapper>
  );
};

export default About;
