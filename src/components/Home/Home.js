import { NavLink } from 'react-router-dom';
import MotionWrapper from '../UI/MotionWrapper';
import Button from 'react-bootstrap/Button';
import classes from './Home.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
  const handleClick = () => {
    props.setActive('about');
  };

  return (
    <MotionWrapper backgroundType='page-background--dark'>
      <section
        id='home'
        className={`d-flex justify-content-center align-items-center ${classes['home-banner']}`}
      >
        <Row>
          <Col>
            Hello, I'm&nbsp;
            <span className={classes['highlight']}>Taylor Morgan</span>
            ,
            <br />
            a full-stack developer.
            <br />
            <NavLink to='/about'>
              <Button
                variant='outline-light'
                className={classes['button__start']}
                onClick={handleClick}
              >
                Let's start.
              </Button>
            </NavLink>
          </Col>
        </Row>
      </section>
    </MotionWrapper>
  );
};

export default Home;
