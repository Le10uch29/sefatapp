import React from 'react';
import { useDispatch } from 'react-redux';
import { setStep } from '@/redux/slices/forgotPasswordSlice';
import Button from '@/components/ui/Button/Button';
import styles from './ForgotPasswordModal.module.scss';

const ResetConfirmationStep = () => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(setStep(4));
  };

  return (
    <form className={styles['reset-confirmation']} onClick={handleConfirm}>
      <p className={styles['text-password']}>
        Parolunuz uğurla sıfırlandı. Yeni parol təyin etmək üçün təsdiqləyin.
      </p>
      <Button text="Təsdiq et"  />
    </form>
  );
};

export default ResetConfirmationStep;
