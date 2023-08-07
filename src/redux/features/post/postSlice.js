import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostsFromApi } from '../../../api/fetchPostsFromApi';


// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page) => {
//     const response = await fetchPostsFromApi(page);
//     return response.data;
// });

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (payload, { getState, requestId }) => {
      const { page, limit } = payload;
      const response = await fetchPostsFromApi(page, limit);
      return response.data;
    }
);

// post slice
export const postSlice = createSlice({
    name: 'post',
    initialState: {
      posts: [],
      loading: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.loading = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.posts = state.posts.concat(action.payload);
          state.loading = 'idle';
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.loading = 'idle';
          state.error = action.error.message;
        });
    },
  });


export default postSlice.reducer;


