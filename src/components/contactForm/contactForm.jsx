import React from 'react'

import styles from './contactForm.module.scss'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form className={styles.contactForm} name="contact" onSubmit={this.handleSubmit} method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <label className={styles.nameField}>Name: <input type="text" id="name" name="name" value={name} onChange={this.handleChange}></input></label>
        <label className={styles.emailField}>Email: <input type="text" id="email" name="email" value={email} onChange={this.handleChange}></input></label>
        <label className={styles.messageField}>Message: <textarea id="message" name="message" value={message} onChange={this.handleChange}></textarea></label>
        <div className={styles.buttonColumn}>
          <button type="submit">Send It</button>
        </div>
      </form>
    );
  }
}

export default ContactForm
