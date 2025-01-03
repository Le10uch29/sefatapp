import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const BaseApi = "https://sefatapp.up.railway.app/"

const initialState = {
    clinics: [],
    clinic: {}
}

export const getClinics = createAsyncThunk('clinics', async () => {
    const res = await (await fetch(`${BaseApi}clinics`)).json()
    return res
})
export const getClinic = createAsyncThunk('clinic', async (id) => {
    const res = await (await fetch(`${BaseApi}clinics/${id}`)).json()
    return res
})

export const clinicsSlice = createSlice({
    name: "clinics",
    initialState,
    extraReducers: builder => {
        builder.addCase(getClinics.fulfilled, (state, action) => {
            state.clinics = action.payload
        })
        builder.addCase(getClinic.fulfilled, (state, action) => {
            state.clinic = action.payload
        })
    }
})

export const { } = clinicsSlice.actions
export default clinicsSlice.reducer