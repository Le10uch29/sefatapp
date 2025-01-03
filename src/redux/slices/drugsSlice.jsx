import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BaseApi = "https://sefatapp.up.railway.app/";

const initialState = {
    medicine: [],
    loading: false,
    error: null
};

export const getMedicines = createAsyncThunk('medicine/getMedicines', async () => {
    const res = await fetch(`${BaseApi}medicine`);
    if (!res.ok) {
        throw new Error('Failed to fetch medicine');
    }
    const data = await res.json();
    return data;
});

export const drugsSlice = createSlice({
    name: 'medicine',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getMedicines.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(getMedicines.fulfilled, (state, action) => {
                state.medicine = action.payload;
                state.loading = false;
            })
            .addCase(getMedicines.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default drugsSlice.reducer;