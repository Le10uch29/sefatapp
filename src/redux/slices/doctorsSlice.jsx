import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const BaseUrl = "https://sefatapp.up.railway.app/"


const initialState = {
    doctors: [],
    doctor: {}
}

export const getDoctors = createAsyncThunk("doctors", async () => {
    const res = await (await fetch(`${BaseUrl}doctors`)).json()
    return res
})
export const getDoctor = createAsyncThunk("doctor", async (id) => {
    const res = await (await fetch(`${BaseUrl}doctors/${id}`)).json()
    return res
})

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getDoctors.fulfilled, (state, action) => {
            state.doctors = action.payload
        });

        builder.addCase(getDoctor.fulfilled, (state, action) => {
            state.doctor = action.payload
        })
    }
})

export const { } = doctorsSlice.actions
export default doctorsSlice.reducer