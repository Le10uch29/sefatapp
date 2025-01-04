import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  openAddCard,
  closeAddCard,
  openEditAddress,
  closeEditAddress,
  openPaymentForm,
  closePaymentForm
} from "@/redux/slices/paymentSlice";
import EditIcon from "@/assets/svg/EditIcon";
import PlusIcon from "@/assets/svg/PlusIcon";
import DiscountInput from "../Basket/DiscountInput";
import Button from "../ui/Button/Button";
import AddressEditModal from "./AddressEditModal";
import AddCardModal from "./AddCardModal";
import PaymentFormModal from "./PaymentFormModal";
import styles from "./PaymentModal.module.scss"

const PaymentModal = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.paymentModal.isOpen);
  const isAddCardOpen = useSelector((state) => state.paymentModal.isAddCardOpen);
  const isEditAddressOpen = useSelector(
    (state) => state.paymentModal.isEditAddressOpen
  );
  const isPaymentFormOpen = useSelector(
    (state) => state.paymentModal.isPaymentFormOpen
  );

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modals}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h2>Güvənli ödəniş</h2>
            <button
              className={styles.closeButton}
              onClick={() => dispatch(closeModal())}
            >
              ×
            </button>
          </div>
          <div className={styles.addressSection}>
            <h3>Çatdırılma ünvanı</h3>
            <label className={styles.option}>
              <div className={styles.content}>
                <input type="radio" name="address" defaultChecked />
                <div>
                  <span>Ev</span>
                  <p>(205) 555-024</p>
                  <p>Nərimanov küçəsi</p>
                </div>
              </div>
              <div
                className={styles.editIcon}
                onClick={() => dispatch(openEditAddress())}
              >
                <EditIcon />
              </div>
            </label>
            <label className={`${styles.option} ${styles.selfPickup}`}>
              <input type="radio" name="address" />
              <span>Özüm gedəcəm</span>
            </label>
          </div>
          <div className={styles.paymentOptions}>
            <h3>Ödəniş seçimləri:</h3>
            <div className={styles.card}>
              <span>VISA</span>
              <p>Kart ilə</p>
            </div>
            <div
              className={styles.addCard}
              onClick={() => dispatch(openAddCard())}
            >
              Yeni kart əlavə edin
              <PlusIcon className={styles.plusIcon} />
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <DiscountInput />
        </div>
        <div className={styles.totals}>
          <div className={styles.total}>
            <p>Toplam</p>
            <p>55 azn</p>
          </div>
          <Button 
            className={styles.confirm} 
            text="Təsdiq et və bitir" 
            onClick={() => dispatch(openPaymentForm())} 
          />
        </div>
        <AddressEditModal
          isOpen={isEditAddressOpen}
          onClose={() => dispatch(closeEditAddress())}
        />
        <AddCardModal
          isOpen={isAddCardOpen}
          onClose={() => dispatch(closeAddCard())}
        />
        <PaymentFormModal
          isOpen={isPaymentFormOpen}
          onClose={() => dispatch(closePaymentForm())}
        />
      </div>
    </div>
  );
};

export default PaymentModal;
