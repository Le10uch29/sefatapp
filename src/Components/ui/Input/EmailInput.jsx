// EmailInput.jsx
import React from 'react';
import styles from './Input.module.scss'

const EmailInput = ({ email, setEmail }) => {
  return (
    <input
      className={styles.input}
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
};

export default EmailInput;
