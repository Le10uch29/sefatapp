
import CartItem from '@/components/Basket/CardItem';
import styles from '../../components/Basket/Basket.module.scss';
import DiscountInput from '@/components/Basket/DiscountInput';
import PaymentSummary from '@/components/Basket/PaymentSummary';
import { Search } from '@/components/Blogs/_components/search/search';

export default function BasketPage() {
  return (
    <div className={styles.cartPage}>
        <Search />
      <h2 className={styles.title}>Səbət</h2>
      <div className={styles.cartItems}>
        {[1, 2, 3, 4].map((_, index) => (
          <CartItem key={index} />
        ))}
      </div>
      <DiscountInput />
      <PaymentSummary />
    </div>
  );
}
