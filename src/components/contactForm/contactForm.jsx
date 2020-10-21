import React, { useState } from 'react';
import posed from 'react-pose';

import styles from './contactForm.module.scss';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Button = posed.button({
  open: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)',
    top: 0,
    left: 0,
    flip: true,
  },
  closed: {
    height: 'inherit',
    width: 'inherit',
    position: 'static',
    flip: true,
  },
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = e => {
    setSubmitting(true);
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
        setSubmitting(false);
        setSuccess(true);
        resetForm();
      })
      .catch(error => {
        setSubmitting(false);
        alert(error);
      });

    e.preventDefault();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
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
      <p class='hidden'>
        <label>
          Don’t fill this out if you're human:{' '}
          <input name='bot-field' onChange={e => setHoneypot(e.target.value)} />
        </label>
      </p>
      <label className={styles.nameField}>
        Name
        <input
          required
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={styles.emailField}>
        Email
        <input
          required
          type='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.messageField}>
        Message
        <textarea
          required
          name='message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </label>
      <div className={styles.buttonColumn}>
        <Button type='submit' pose={success ? 'open' : 'closed'}>
          {success ? 'Sent!' : 'Send It'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
