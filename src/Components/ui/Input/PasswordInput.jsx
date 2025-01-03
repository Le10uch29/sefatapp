import React, { useState } from 'react';
import styles from './Input.module.scss';
import PasswordHiddenIcon from '@/assets/svg/PasswordHiddenIcon';
import PasswordVisibleIcon from '@/assets/svg/PasswordVisibleIcon';

const PasswordInput = ({ password, setPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Şifrə"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div onClick={togglePasswordVisibility} className={styles.icon}>
        {isPasswordVisible ? <PasswordVisibleIcon /> : <PasswordHiddenIcon />}
      </div>
    </div>
  );
};

export default PasswordInput;
