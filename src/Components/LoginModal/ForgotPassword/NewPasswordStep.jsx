// src/components/ForgotPassword/NewPasswordStep.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewPassword, setConfirmPassword, setPasswordError, setStep } from '@/redux/slices/forgotPasswordSlice';
import PasswordInput from '@/components/ui/Input/PasswordInput';
import Button from '@/components/ui/Button/Button';
import styles from './ForgotPasswordModal.module.scss';

const NewPasswordStep = () => {
  const dispatch = useDispatch();
  const { newPassword, confirmPassword, passwordError } = useSelector((state) => state.forgotPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      dispatch(setPasswordError('Parol ən azı 6 simvoldan ibarət olmalıdır.'));
      return;
    }

    if (newPassword !== confirmPassword) {
      dispatch(setPasswordError('Parol təsdiqi uyğun gəlmir.'));
      return;
    }

    dispatch(setPasswordError(''));
    dispatch(setStep(5)); // Move to success step
  };

  return (
    <form className={styles['new-password']} onSubmit={handleSubmit}>
      {/* First PasswordInput for New Password */}
      <PasswordInput
        password={newPassword}  // Use password prop for new password
        setPassword={(value) => dispatch(setNewPassword(value))}  // Only dispatch setNewPassword here
        placeholder="Yeni şifrəni daxil edin"
      />
      {/* Second PasswordInput for Confirm Password */}
      <PasswordInput
        password={confirmPassword}  // Use password prop for confirm password
        setPassword={(value) => dispatch(setConfirmPassword(value))}  // Only dispatch setConfirmPassword here
        placeholder="Şifrəni təkrarlayın"
      />
      {passwordError && <p className={styles.error}>{passwordError}</p>}
      <Button text="Təsdiq et" />
    </form>
  );
};

export default NewPasswordStep;
