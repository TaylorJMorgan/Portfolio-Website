import Footer from '../UI/Footer';
import Socials from './components/Socials';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './Contact.module.css';
import ContactForm from './components/ContactForm';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Contact = () => {
  return (
    <MotionWrapper backgroundType='page-background--dark'>
      <section id='contact'>
        <Row>
          <h1 className={classes['page-title--dark']}>CONTACT</h1>
          <p className={classes['form-header']}>
            Have a question? Send me an email!
          </p>
        </Row>
        <Row>
          <Container>
            <ContactForm />
          </Container>
        </Row>
        <Row>
          <Socials />
          <Footer />
        </Row>
      </section>
    </MotionWrapper>
  );
};

export default Contact;
