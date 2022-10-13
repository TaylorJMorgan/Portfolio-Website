import React from 'react';

import Footer from '../components/Footer';
import Socials from '../components/Socials';
import { useForm, ValidationError } from '@formspree/react';
import MotionWrapper from '../components/MotionWrapper';
import classes from './Contact.module.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqnddqv');

  if (state.succeeded) {
    return (
      <MotionWrapper backgroundType='page-background--dark'>
        <div className={classes['inner-page']}>
          <h1 className={classes['page-title--dark']}>CONTACT</h1>

          <p className={classes['form-header']}>
            Have a question? Send me an email!
          </p>
          <div className='row justify-content-center'>
            <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
              <form
                onSubmit={handleSubmit}
                className={`mb-5 w-100 ${classes['contact-form']}`}
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
                    className={`${classes['btn-submit']} btn btn-md btn-outline-light my-2`}
                    disabled='true'
                  >
                    Submit
                  </button>
                </div>
                <p className={classes['form-header']}>
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
    <MotionWrapper backgroundType='page-background--dark'>
      <div className={classes['inner-page']}>
        <h1 className={classes['page-title--dark']}>CONTACT</h1>

        <p className={classes['form-header']}>
          Have a question? Send me an email!
        </p>
        <div className='row justify-content-center'>
          <div className='d-flex col-8 col-lg-6 col-xxl-4 align-items-center'>
            <form
              onSubmit={handleSubmit}
              className={`mb-5 w-100 ${classes['contact-form']}`}
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
                  className={`${classes['btn-submit']} btn btn-md btn-outline-light my-2`}
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
              <p className={classes['form-header']}>
                Uh-oh, something went wrong - please try again later.
              </p>
            </form>
          </div>
        </div>

        <Socials />
      </div>
      <Footer />
    </MotionWrapper>;
  }

  return (
    <MotionWrapper backgroundType='page-background--dark'>
      <div className={classes['inner-page']}>
        <h1 className={classes['page-title--dark']}>CONTACT</h1>

        <p className={classes['form-header']}>
          Have a question? Send me an email!
        </p>
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
                  className={`${classes['btn-submit']} btn btn-md btn-outline-light my-2`}
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
    </MotionWrapper>
  );
};

export default Contact;