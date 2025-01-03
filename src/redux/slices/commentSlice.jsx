const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const api = "https://json-server-six-inky.vercel.app/"

const initialState = {
    comments: []
}

export const getComments = createAsyncThunk('comments', async () => {
    const res = await (await fetch(`${api}comments`)).json()
    return res
})

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
    }
})


export const { } = commentSlice.actions;
export default commentSlice.reducer