import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const BaseApi = "https://sefatapp.up.railway.app/"

const initialState = {
    blogs: [],
    blog: {}
}

export const getBlogs = createAsyncThunk('blogs', async () => {
    const res = await (await fetch(`${BaseApi}blogs`)).json()
    return res
})
export const getBlog = createAsyncThunk('blog', async (id) => {
    const res = await (await fetch(`${BaseApi}blogs/${id}`)).json()
    return res
})

export const blogsSlice = createSlice({
    name: "clinics",
    initialState,
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(getBlog.fulfilled, (state, action) => {
            state.blog = action.payload
        })
    }
})

export const { } = blogsSlice.actions
export default blogsSlice.reducer