import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BaseApi = "https://json-server-six-inky.vercel.app/"

const initialState = {
    pharmacies: []
}

export const getPharmacies = createAsyncThunk('pharmacies', async () => {
    const res = await (await fetch(`${BaseApi}pharmacies`)).json()
    return res
})

export const pharmaciesSlice = createSlice({
    name: 'pharmacies',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPharmacies.fulfilled, (state, action) => {
            state.pharmacies = action.payload
        })
    }
})

export const { } = pharmaciesSlice.actions
export default pharmaciesSlice.reducer