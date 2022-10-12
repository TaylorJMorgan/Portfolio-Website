import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Socials from '../components/Socials';
import { useForm, ValidationError } from '@formspree/react';
import MotionWrapper from '../components/MotionWrapper';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqnddqv');

  if (state.succeeded) {
    return (
      <MotionWrapper>
        <div className='inner-page'>
          <h1 className='page-title-dark'>CONTACT</h1>

          <p className='form-header'>Have a question? Send me an email!</p>
          <div className='row justify-content-center'>
            <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
              <form
                onSubmit={handleSubmit}
                className='mb-5 w-100 contact-form'
              >
                <div className=''>
                  <input
                    type='text'
                    name='name'
                    className='form-control my-2'
                    placeholder='Your name'
                  />
                  <input
                    type='email'
                    name='email'
                    className='form-control my-2'
                    placeholder='Your email'
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <textarea
                    name='message'
                    className='form-control my-2'
                    placeholder='Your message'
                    rows='4'
                  />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={state.errors}
                  />
                  <button
                    type='submit'
                    className='btn-submit btn btn-md btn-outline-light my-2'
                    disabled='true'
                  >
                    Submit
                  </button>
                </div>
                <p className='form-header'>
                  Success! Thanks for your submission.
                </p>
              </form>
            </div>
          </div>

          <Socials />
        </div>
        <Footer />
      </MotionWrapper>
    );
  }

  if (state.failed) {
    <motion.div
      initial={{ y: -window.innerHeight }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.5 } }}
      className='page-background-dark'
    >
      <div className='inner-page'>
        <h1 className='page-title-dark'>CONTACT</h1>

        <p className='form-header'>Have a question? Send me an email!</p>
        <div className='row justify-content-center'>
          <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
            <form
              onSubmit={handleSubmit}
              className='mb-5 w-100 contact-form'
            >
              <div className=''>
                <input
                  type='text'
                  name='name'
                  className='form-control my-2'
                  placeholder='Your name'
                />
                <input
                  type='email'
                  name='email'
                  className='form-control my-2'
                  placeholder='Your email'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <textarea
                  name='message'
                  className='form-control my-2'
                  placeholder='Your message'
                  rows='4'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <button
                  type='submit'
                  className='btn-submit btn btn-md btn-outline-light my-2'
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
              <p className='form-header'>
                Uh-oh, something went wrong - please try again later.
              </p>
            </form>
          </div>
        </div>

        <Socials />
      </div>
      <Footer />
    </motion.div>;
  }

  return (
    <motion.div
      initial={{ y: -window.innerHeight }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: -window.innerHeight, transition: { duration: 0.5 } }}
      className='page-background-dark'
    >
      <div className='inner-page'>
        <h1 className='page-title-dark'>CONTACT</h1>

        <p className='form-header'>Have a question? Send me an email!</p>
        <div className='row justify-content-center'>
          <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
            <form
              onSubmit={handleSubmit}
              className='mb-5 w-100 contact-form'
            >
              <div className=''>
                <input
                  type='text'
                  name='name'
                  className='form-control my-2'
                  placeholder='Your name'
                />
                <input
                  type='email'
                  name='email'
                  className='form-control my-2'
                  placeholder='Your email'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <textarea
                  name='message'
                  className='form-control my-2'
                  placeholder='Your message'
                  rows='4'
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <button
                  type='submit'
                  className='btn-submit btn btn-md btn-outline-light my-2'
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <Socials />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
