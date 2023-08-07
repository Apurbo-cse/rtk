import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
    loading: false,
    posts: [],
    error: ' '
}

// Create async thunk
export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) =>{
            state.loading = true;
            state.error = '';
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) =>{
            state.loading = false;
            state.error = '';
            state.posts = action.payload;
        })

        builder.addCase(fetchPosts.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message;
            state.posts = []
        })      
    }
})

export default postSlice.reducer;
