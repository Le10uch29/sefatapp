import React, { useState } from "react";
import styles from "./PaymentFormModal.module.scss";
import { useDispatch } from "react-redux";
import CardIcon from "@/assets/svg/CartIcon";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "../ui/Button/Button";
import PaymentSuccess from "./PaymentSuccess";
import { closePaymentForm, openPaymentSuccess } from "@/redux/slices/paymentSlice";

const Dropdown = ({
  label,
  selected,
  options,
  isOpen,
  toggleDropdown,
  onSelect,
  icon: Icon,
}) => (
  <div className={styles.formGroup}>
    {label && <label>{label}</label>}
    <div className={styles.customSelect}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        <div className={styles.selectedOptionDiv}>
          {Icon && <Icon />}
          <span>{selected}</span>
        </div>
        {isOpen ? (
          <FaChevronUp className={styles.arrowIcon} />
        ) : (
          <FaChevronDown className={styles.arrowIcon} />
        )}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownOption}
              onClick={() => onSelect(option)}
            >
              {Icon && <Icon />}
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const PaymentFormModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState("**** 1234");
  const [selectedSmartCard, setSelectedSmartCard] = useState(
    "SmartCard 1 (A8716ZJA1)"
  );
  const [selectedCurrency, setSelectedCurrency] = useState("AZN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmartCardDropdownOpen, setIsSmartCardDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessOpen(true);
    dispatch(openPaymentSuccess());
  };

  const handleClosePaymentSuccess = () => {
    setIsSuccessOpen(false);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      {isSuccessOpen ? (
        <PaymentSuccess
          isOpen={isSuccessOpen}
          onClose={handleClosePaymentSuccess}
        />
      ) : (
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>Ödəniş</h2>
            <button className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>
          <form className={styles.modalForm} onSubmit={handleSubmit}>
            {/* Card Selection */}
            <Dropdown
              selected={selectedCard}
              options={["**** 1234", "**** 3467"]}
              isOpen={isDropdownOpen}
              toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
              onSelect={(card) => {
                setSelectedCard(card);
                setIsDropdownOpen(false);
              }}
              icon={CardIcon}
            />

            {/* Smart Card Selection */}
            <Dropdown
              label="Smart card"
              selected={selectedSmartCard}
              options={["SmartCard 1 (A8716ZJA1)", "SmartCard 2 (B1234XKL9)"]}
              isOpen={isSmartCardDropdownOpen}
              toggleDropdown={() =>
                setIsSmartCardDropdownOpen(!isSmartCardDropdownOpen)
              }
              onSelect={(smartCard) => {
                setSelectedSmartCard(smartCard);
                setIsSmartCardDropdownOpen(false);
              }}
            />

            {/* Amount Input */}
            <div className={styles.amountInput}>
              <label>Məbləğ</label>
              <div className={styles.amountGroup}>
                <input type="text" placeholder="50" />
                <Dropdown
                  selected={selectedCurrency}
                  options={["AZN", "USD", "EUR"]}
                  isOpen={isCurrencyDropdownOpen}
                  toggleDropdown={() =>
                    setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
                  }
                  onSelect={(currency) => {
                    setSelectedCurrency(currency);
                    setIsCurrencyDropdownOpen(false);
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button text="Ödə" className={styles.submitButton} type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentFormModal;
