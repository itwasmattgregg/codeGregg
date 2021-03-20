import React, { useState } from 'react';
import posed from 'react-pose';

import * as styles from './contactForm.module.scss';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Button = posed.button({
  open: {
    scale: 1.4,
    'background-color': '#00AB66',
  },
});

const FormFields = posed.div({
  waiting: {
    opacity: 1,
    height: 'auto',
  },
  success: {
    opacity: 0,
    height: '0px',
  },
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setState('submitting');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
        'bot-field': honeypot,
      }),
    })
      .then(() => {
        setState('success');
        resetForm();
      })
      .catch((error) => {
        setState('error');
        alert(error);
      });
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const buttonText = () => {
    switch (state) {
      case 'submitting':
        return 'Submitting';
      case 'success':
        return 'Success';
      case 'error':
        return 'There was an error';
      default:
        return 'Send';
    }
  };

  return (
    <form
      id='contact'
      className={styles.contactForm}
      name='contact'
      onSubmit={handleSubmit}
      data-netlify-honeypot='bot-field'
      data-netlify='true'
    >
      <FormFields
        className={styles.formFields}
        pose={state === 'success' ? 'success' : 'waiting'}
      >
        <p className='hidden'>
          <label>
            Don’t fill this out if you're human:{' '}
            <input
              name='bot-field'
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </p>
        <label className={styles.nameField}>
          Name
          <input
            required
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.emailField}>
          Email
          <input
            required
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.messageField}>
          Message
          <textarea
            required
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </FormFields>
      <div className={styles.buttonColumn}>
        <Button
          disabled={state === 'submitting' || state === 'success'}
          type='submit'
          pose={state === 'success' ? 'open' : 'closed'}
        >
          {buttonText()}
          {state === 'submitting' && (
            <svg
              className={styles.spinner}
              viewBox='0 0 100 100'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='50' cy='50' r='45' />
            </svg>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
