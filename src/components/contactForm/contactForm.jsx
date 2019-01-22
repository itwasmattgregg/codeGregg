import React from 'react'

import styles from './contactForm.module.scss'

const ContactForm = ({side, backgroundColor, children}) => (
  <form className={styles.contactForm} name="contact" method="POST" data-netlify="true">
    <label>Name: <input type="text" id="name" name="name"></input></label>
    <label>Email: <input type="text" id="email" name="email"></input></label>
    <label>Message: <textarea id="name" name="name"></textarea></label>
    <button type="submit">Submit</button>
  </form>
)

export default ContactForm
