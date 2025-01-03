// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  email: "",
  password: "",
  error: null,
  isModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isModalOpen = false;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const {
  openModal,
  closeModal,
  setEmail,
  setPassword,
  setError,
  setIsModalOpen,
} = authSlice.actions;

export default authSlice.reducer;