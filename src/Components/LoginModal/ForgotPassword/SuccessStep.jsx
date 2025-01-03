// src/components/ForgotPassword/SuccessStep.jsx
import React from 'react';
import Link from 'next/link';
import SuccessMark from '@/assets/svg/SuccessMark';
import Button from '@/components/ui/Button/Button';
import { closeModal } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import styles from './ForgotPasswordModal.module.scss';

const SuccessStep = () => {
  const dispatch = useDispatch();

  const handleCloseAndRedirect = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <div className={styles['success-mark']}>
        <SuccessMark />
      </div>
      <h2>Uğurlu</h2>
      <p className={styles['text-password']}>Təbrik edirik! Parolunuz var dəyişdirilib. Daxil olmaq üçün davam edin</p>
      <Link href="/" onClick={handleCloseAndRedirect}>
        <Button text="Parolu yeniləyin" showIcon={false} />
      </Link>
    </div>
  );
};

export default SuccessStep;
