import React, { useState } from 'react';
import styles from '../styles/Component/contactform.module.scss';
import { useRouter } from 'next/router';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage('Thanks for your message!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.log('An error occurred while submitting the contact form.');
        setAlertMessage('An error occurred while sending the email. Please try again later.');
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
      setAlertMessage('An error occurred while sending the email. Please try again later.');
    }
  };

  return (
    <div>
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
      <button type="submit" className={styles.form__button} >Submit</button>
    </form>
     {alertMessage && <p style={{ color: 'blue' }}>{alertMessage}</p>}
     </div>
    
  );
};

export default ContactForm;
