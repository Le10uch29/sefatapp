// src/components/ForgotPassword/EmailStep.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setStep } from '@/redux/slices/forgotPasswordSlice';
import EmailInput from '@/components/ui/Input/EmailInput';
import Button from '@/components/ui/Button/Button';
import styles from './ForgotPasswordModal.module.scss';

const EmailStep = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.forgotPassword.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setStep(2)); // Proceed to code verification step
  };

  return (
    <form className={styles['modal-form']} onSubmit={handleSubmit}>
      <EmailInput email={email} setEmail={(value) => dispatch(setEmail(value))} placeholder="Email Adresi" />
      <Button text="Təsdiq et" />
    </form>
  );
};

export default EmailStep;
