import React from "react";
import styles from "./PaymentSuccess.module.scss";
import SuccessIcon from "@/assets/svg/SuccessIcon";
import CardIcon from "@/assets/svg/CartIcon";
import Button from "../ui/Button/Button";

const PaymentSuccess = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <SuccessIcon />
        <h2>Ödəməniz uğurla başa çatdı!</h2>
        <p className={styles.reservationNumber}>Rezervasiya nömrəniz: 856345</p>
      </div>
      <div className={styles.details}>
        <h3>Detallar</h3>
        <hr />
        <div className={styles.detailRow}>
          <span>SMART CARD</span>
          <span>REZERV ÖDƏNİŞİ <strong>(AB716ZJA1)</strong></span>
        </div>
        <hr />
        <div className={styles.detailRow}>
          <span>PAYMENT METHOD</span>
          <span>
            <CardIcon />
            **** 1234
          </span>
        </div>
        <hr />
        <div className={styles.detailRow}>
          <span>AMOUNT</span>
          <span>₼ 50</span>
        </div>
        <hr />
        <div className={styles.detailRow}>
          <span>PAYMENT DATE</span>
          <span>13 Jul, 11:17</span>
        </div>
      </div>
      <Button className={styles.primaryButton} onClick={onClose} text="Əsas səhifəyə qayıt"/>
    </div>
  );
};

export default PaymentSuccess;
