import React, { useEffect, useReducer, useState } from 'react';

import classes from './ContactForm.module.css';
import { useForm } from '@formspree/react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 5 };
  }
  return { value: '', isValid: false };
};

const messageReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 20 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 20 };
  }
  return { value: '', isValid: false };
};

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm('meqnddqv');
  const [validationText, setValidationText] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: null,
  });

  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: '',
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: nameIsValid } = nameState;
  const { isValid: messageIsValid } = messageState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
  };

  const messageChangeHandler = (event) => {
    dispatchMessage({ type: 'USER_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validateNameHandler = () => {
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const validateMessageHandler = () => {
    dispatchMessage({ type: 'INPUT_BLUR' });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity');
      setFormIsValid(emailIsValid && nameIsValid && messageIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, nameIsValid, messageIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    handleSubmit(event);
    setValidationText(
      "Thanks for your submission! I'll get back to you shortly."
    );
  };

  return (
    <Container>
      <form
        onSubmit={submitHandler}
        className={`mb-5 ${classes['contact-form']} w-auto`}
      >
        <input
          type='text'
          name='name'
          className='form-control my-2'
          placeholder='Your name'
          value={nameState.value}
          onChange={nameChangeHandler}
          onBlur={validateNameHandler}
        />
        <input
          type='email'
          name='email'
          className='form-control my-2'
          placeholder='Your email'
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <textarea
          name='message'
          className='form-control my-2'
          placeholder='Your message'
          rows='4'
          value={messageState.value}
          onChange={messageChangeHandler}
          onBlur={validateMessageHandler}
        />
        <Button
          type='submit'
          variant='outline-light'
          className={`${classes['btn-submit']} my-2`}
          disabled={!formIsValid}
        >
          Submit
        </Button>
        <p className={classes['form-header']}>
          {formIsValid ? validationText : ''}
        </p>
      </form>
    </Container>
  );
};

export default ContactForm;
