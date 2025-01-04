import React, { useState } from "react";
import styles from "./AddCardModal.module.scss";
import TextInput from "../ui/Input/TextInput";
import Button from "../ui/Button/Button";
import ArrowBack from "@/assets/svg/ArrowBack";

const formatExpirationDate = (value) => {
  const digitsOnly = value.replace(/\D/g, "");
  const limitedDigits = digitsOnly.slice(0, 4);

  if (limitedDigits.length > 2) {
    return `${limitedDigits.slice(0, 2)} / ${limitedDigits.slice(2)}`;
  }
  return limitedDigits;
};

const AddCardModal = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "expirationDate") {
      setFormValues({ ...formValues, [name]: formatExpirationDate(value) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <div>
            <ArrowBack />
            <h3>Yeni kart əlavə</h3>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <TextInput
            label="16 rəqəmli nömrə"
            type="text"
            placeholder="1234 5678 9012 1234"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={handleChange}
            maxLength={16}
          />
          <div className={styles.row}>
            <TextInput
              label="Expiration date"
              type="text"
              placeholder="MM / YY"
              name="expirationDate"
              value={formValues.expirationDate}
              onChange={handleChange}
              maxLength={7}
            />
            <TextInput
              label="CVV / CVC"
              type="password"
              placeholder="•••"
              name="cvv"
              value={formValues.cvv}
              onChange={handleChange}
              maxLength={3}
            />
          </div>
          <div className={styles.check}>
            <input type="checkbox" />
            <p>Bu kartı yadda saxla</p>
          </div>

          <Button text="Əlavə et" className={styles.saveButton} />
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
