import React, { useEffect, useState } from 'react';

import classes from './ContactForm.module.css';
import { useForm } from '@formspree/react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import useInput from '../../../hooks/use-input';

const ContactForm = (props) => {
  const [formSuccessfullySubmitted, setFormSuccessfullySubmitted] =
    useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const [state, handleSubmit] = useForm('meqnddqv');
  const [validationText, setValidationText] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    handleSubmit(event);

    setFormSuccessfullySubmitted(true);

    resetNameInput();
    resetEmailInput();
    resetMessageInput();
    console.log(state);
  };

  const nameInputClasses = nameHasError
    ? 'form-control is-invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control my-2 is-invalid'
    : 'form-control my-2';

  const messageInputClasses = messageHasError
    ? 'form-control my-2 is-invalid'
    : 'form-control my-2';

  useEffect(() => {
    if (nameHasError) {
      setValidationText('Please enter a name.');
    }
    if (emailHasError) {
      setValidationText('Please enter a valid email address.');
    }
    if (messageHasError) {
      setValidationText('Please enter a message.');
    }
  }, [nameHasError, emailHasError, messageHasError]);

  return (
    <Container>
      <form
        onSubmit={submitHandler}
        className={`mb-5 ${classes['contact-form']} w-auto`}
      >
        <div>
          <input
            id='name'
            type='text'
            name='name'
            className={nameInputClasses}
            placeholder='Your name'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div>
          <input
            id='email'
            type='email'
            name='email'
            className={emailInputClasses}
            placeholder='Your email'
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div>
          <textarea
            id='message'
            name='message'
            className={messageInputClasses}
            placeholder='Your message'
            rows='4'
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
        </div>
        <Button
          type='submit'
          variant='outline-light'
          className={`${classes['btn-submit']} my-2`}
          disabled={!formIsValid}
        >
          {nameHasError || emailHasError || messageHasError
            ? validationText
            : 'Submit'}
        </Button>

        <p className={classes['form-header']}>
          {formSuccessfullySubmitted &&
            'Thank you for your submission! I will get back to you shortly.'}
          &#8203;{/* No-width space to ensure p tag occupies space */}
        </p>
      </form>
    </Container>
  );
};

export default ContactForm;
