import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCode, setError, setStep } from '@/redux/slices/forgotPasswordSlice';
import Button from '@/components/ui/Button/Button';
import { getTruncatedEmail } from '@/utils/getTruncatedEmail';
import styles from './ForgotPasswordModal.module.scss';

const CodeVerificationStep = () => {
  const dispatch = useDispatch();
  const { code, error, email } = useSelector((state) => state.forgotPassword);
  const codeRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]$/.test(value) && value !== '') return;

    const newCode = [...code];
    newCode[index] = value;
    dispatch(setCode(newCode));

    if (value && index < codeRefs.length - 1) {
      codeRefs[index + 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.includes('')) {
      dispatch(setError('Zəhmət olmasa, bütün sahələri doldurun.'));
    } else {
      dispatch(setError(''));
      dispatch(setStep(3)); 
    }
  };

  return (
    <form className={styles['code-verification']} onSubmit={handleSubmit}>
      <p>
        {`${getTruncatedEmail(email)} ünvanına sıfırlama linki göndərdik.`} <br />
        e-poçtda qeyd olunan 4 rəqəmli kodu daxil edin
      </p>
      <div  className={styles['code-inputs']}>
        {code.map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className={styles['code-input']}
            ref={codeRefs[index]}
            value={code[index]}
            onChange={(e) => handleInputChange(e, index)}
          />
        ))}
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <Button text="Təsdiq et" />
    </form>
  );
};

export default CodeVerificationStep;
