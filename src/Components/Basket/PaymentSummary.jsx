"use client"; 

import { useState } from "react";
import styles from "../Basket/Basket.module.scss";
import Button from "../ui/Button/Button";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/slices/paymentSlice";
import PaymentModal from "../Payment/PaymentModal";

export default function PaymentSummary() {
  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    dispatch(openModal());
  };
    const [discountCode, setDiscountCode] = useState("");
    const [total, setTotal] = useState(228.3);
    const [productDiscount, setProductDiscount] = useState(28.4);
    const [couponDiscount, setCouponDiscount] = useState(15.8);
  
    const handleApplyCoupon = () => {
      if (discountCode === "DISCOUNT10") {
        const newCouponDiscount = 25.0;
        const newTotal = total - newCouponDiscount + couponDiscount;

        setCouponDiscount(newCouponDiscount);
        setTotal(parseFloat(newTotal.toFixed(2)));
      } else {
        alert("Yanlış endirim kodu daxil etdiniz.");
      }
    };

  return (
    <div className={styles.paymentSummary}>
      <div className={styles.summarySection}>
        <h3 className={styles.title}>Ödəniş Xülasəsi</h3>
        <div className={styles.row}>
          <span className={styles.rowTitle}>Sifariş cəmi</span>
          <span className={styles.rowPrice}>{total + productDiscount + couponDiscount}₼</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowTitle}>Məhsul Endirimi</span>
          <span className={styles.rowPrice}>- {productDiscount}₼</span>
        </div>
        <div className={styles.row}>
          <span className={styles.rowTitle}>Kupon Endirimi</span>
          <span className={styles.rowPrice}>- {couponDiscount}₼</span>
        </div>
        <div className={`${styles.row} ${styles.totalRow}`}>
          <span className={styles.rowTotal}>Total ₼</span>
          <span className={styles.rowTotalPrice}>{total}₼</span>
        </div>
      </div>

      <Button 
        text="Səbəti təsdiqlə" 
        showIcon={false} 
        className={styles.confirmButton}
        onClick={handleConfirmClick}
      />
      <PaymentModal />
    </div>
  );
}
