import { createSlice } from '@reduxjs/toolkit';

const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: {
    email: '',
    step: 1,
    code: ['', '', '', ''],
    error: '',
    newPassword: '',
    confirmPassword: '',
    passwordError: '',
  },
  reducers: {
    setEmail: (state, action) => { state.email = action.payload; },
    setStep: (state, action) => {
      state.step = action.payload;
      if (action.payload === 1) {
        state.email = '';
        state.code = ['', '', '', ''];
        state.newPassword = '';
        state.confirmPassword = '';
      }
      if (action.payload === 2) {
        state.code = ['', '', '', ''];
      }
      if (action.payload === 3) {
        state.newPassword = '';
        state.confirmPassword = '';
      }
    },
    setCode: (state, action) => { state.code = action.payload; },
    setError: (state, action) => { state.error = action.payload; },
    setNewPassword: (state, action) => { state.newPassword = action.payload; },
    setConfirmPassword: (state, action) => { state.confirmPassword = action.payload; },
    setPasswordError: (state, action) => { state.passwordError = action.payload; },
    resetState: (state) => { 
      state.email = ''; 
      state.step = 1;
      state.code = ['', '', '', ''];
      state.error = '';
      state.newPassword = '';
      state.confirmPassword = '';
      state.passwordError = '';
    },
  },
});

export const {
  setEmail,
  setStep,
  setCode,
  setError,
  setNewPassword,
  setConfirmPassword,
  setPasswordError,
  resetState,
} = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
