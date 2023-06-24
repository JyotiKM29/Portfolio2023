import React, { useState } from 'react';
import styles from '../styles/Component/contactform.module.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (response.ok) {
      console.log('Contact form submitted successfully!');
      // Reset the form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      console.log('An error occurred while submitting the contact form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form__group}>
        <label htmlFor="name" className={styles.form__label}>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          className={styles.form__input}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="email" className={styles.form__label}>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          className={styles.form__input}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="subject" className={styles.form__label}>Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          className={styles.form__input}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="message" className={styles.form__label}>Message:</label>
        <textarea
          id="message"
          value={message}
          className={styles.form__textarea}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.form__button}>Submit</button>
    </form>
  );
};

export default ContactForm;
