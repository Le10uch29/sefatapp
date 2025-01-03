import React from "react";
import styles from "./Input.module.scss";

const TextInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  isTextarea = false, 
  name, 
  maxLength 
}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (type === "text" && name === "cardNumber") {
      if (!/^\d*$/.test(inputValue)) return;
    }

    onChange(e);
  };

  return (
    <label className={styles.inputField}>
      <span className={styles.inputLabel}>{label}</span>
      {isTextarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.textarea}
          maxLength={maxLength}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className={styles.input}
          maxLength={maxLength}
        />
      )}
    </label>
  );
};

export default TextInput;
