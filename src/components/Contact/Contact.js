import React from 'react';

import Footer from '../UI/Footer';
import Socials from './components/Socials';
import MotionWrapper from '../UI/MotionWrapper';
import classes from './Contact.module.css';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <MotionWrapper backgroundType='page-background--dark'>
      <h1 className={classes['page-title--dark']}>CONTACT</h1>
      <p className={classes['form-header']}>
        Have a question? Send me an email!
      </p>
      <ContactForm />
      <Socials />
      <Footer />
    </MotionWrapper>
  );
};

export default Contact;
