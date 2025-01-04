import StarIcon from '@/assets/svg/StarIcon';
import styles from '../Basket/Basket.module.scss';
import StarHalfIcon from '@/assets/svg/StarHalfIcon';
import MinusIcon from '@/assets/svg/MinusIcon';
import PlusIcon from '@/assets/svg/PlusIcon';
import Image from 'next/image';

export default function CartItem() {
  return (
    <div className={styles.cartItem}>
      <Image
        width={140}
        height={140}
        src="images/product-image.svg"
        alt="Product"
        className={styles.productImage}
      />
      <div className={styles.card}>
        <div className={styles.details}>
            <div>
                <h3 className={styles.productName}>Aksenfort</h3>
                <p className={styles.productType}>tabletkа</p>
            </div>
            <button className={styles.removeButton}>✕</button>
        </div>
        <div className={styles.actions}>
            <div className={styles.action}>
                <div className={styles.icons}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                </div>
                <p className={styles.productPrice}>50₼</p>
            </div>
            <div className={styles.productSize}>
                <button className={styles.actionButtonOne}>
                  <MinusIcon/>
                </button>
                <span className={styles.quantity}>1</span>
                <button className={styles.actionButtonTwo}>
                  <PlusIcon/>
                </button>
            </div>
           
        </div>
      </div>
    </div>
  );
}
