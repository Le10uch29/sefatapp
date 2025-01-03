
import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "./slices/doctorsSlice";
import pharmaciesSlice from "./slices/pharmaciesSlice";
import clinicsSlice from "./slices/clinicsSlice";
import loadingSlice from "./slices/loadingSlice";
import drugsSlice from "./slices/drugsSlice";
import commentSlice from "./slices/commentSlice";
import blogsSlice from "./slices/blogSlice";
import authSlice from "./slices/authSlice";
import forgotPasswordSlice from "./slices/forgotPasswordSlice";
import paymentSlice from "./slices/paymentSlice";

const store = configureStore({
  reducer: {
    doctors: doctorsSlice,
    clinics: clinicsSlice,
    pharmacies: pharmaciesSlice,
    loading: loadingSlice,
    medicines: drugsSlice,
    comments: commentSlice,
    blogs: blogsSlice,
    auth: authSlice,
    forgotPassword: forgotPasswordSlice,
    paymentModal: paymentSlice,
  },
});

export default store;

