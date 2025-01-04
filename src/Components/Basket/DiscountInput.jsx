import styles from '../Basket/Basket.module.scss';

export default function DiscountInput() {
  return (
    <div className={styles.discountSection}>
      <input
        type="text"
        placeholder="Endirim kodu daxil et"
        className={styles.discountInput}
      />
      <button className={styles.applyButton}>Tətbiq et</button>
    </div>
  );
}
