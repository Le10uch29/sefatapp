import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "paymentModal",
  initialState: {
    isOpen: false,
    isAddCardOpen: false,
    isEditAddressOpen: false,
    isPaymentFormOpen: false,
    isPaymentModalOpen: false,
    isPaymentSuccessOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    openAddCard: (state) => {
      state.isAddCardOpen = true;
    },
    closeAddCard: (state) => {
      state.isAddCardOpen = false;
    },
    openEditAddress: (state) => {
      state.isEditAddressOpen = true;
    },
    closeEditAddress: (state) => {
      state.isEditAddressOpen = false;
    },
    openPaymentForm: (state) => {
      state.isPaymentFormOpen = true;
    },
    closePaymentForm: (state) => {
      state.isPaymentFormOpen = false;
    },
    openPaymentModal: (state) => {
      state.isPaymentModalOpen = true;
    },
    closePaymentModal: (state) => {
      state.isPaymentModalOpen = false;
    },
    openPaymentSuccess: (state) => {
      state.isPaymentSuccessOpen = true;
    },
    closePaymentSuccess: (state) => {
      state.isPaymentSuccessOpen = false;
    },
  },
});

export const {
  openModal,
  closeModal,
  openAddCard,
  closeAddCard,
  openEditAddress,
  closeEditAddress,
  openPaymentForm,
  closePaymentForm,
  openPaymentModal,
  closePaymentModal,
  openPaymentSuccess,
  closePaymentSuccess,
} = paymentSlice.actions;

export default paymentSlice.reducer;
