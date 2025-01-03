import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ForgotPasswordModal.module.scss';
import EmailStep from './EmailStep';
import CodeVerificationStep from './CodeVerificationStep';
import NewPasswordStep from './NewPasswordStep';
import SuccessStep from './SuccessStep';
import ResetConfirmationStep from './ResetConfirmationStep';

const ForgotPasswordModal = ({ isOpen }) => {
  const step = useSelector((state) => state.forgotPassword.step);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles['modal-content']}>
        <h2>
          {step === 1
            ? 'Şifrəni Unutmusunuz?'
            : step === 2
            ? 'E-poçtunuzu yoxlayın'
            : step === 3
            ? 'Parolun sıfırlanması'
            : step === 4
            ? 'Yeni Parol Təyin Edin'
            : ''}
        </h2>

        {step === 1 && <EmailStep />}
        {step === 2 && <CodeVerificationStep />}
        {step === 3 && <ResetConfirmationStep />}
        {step === 4 && <NewPasswordStep />}
        {step === 5 && <SuccessStep />}
        {(step === 1 || step === 2) && (
          <div className={styles['resend-link']}>
            <p>E-poçt hələ də yoxdur?</p>
            <a href="#">E-poçtu yenidən göndərin</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;