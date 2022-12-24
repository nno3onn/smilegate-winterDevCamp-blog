import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";

// initialState type
export type PostState = {
  post_id: number;
  title: string;
  content: string;
  created_at: Date;
  thumbnail: string;
};
export type PostListState = {
  posts: [PostState] | [];
  isLoading: boolean;
  error: string | null;
};

// initialState
const initialState: PostListState = {
  posts: [],
  isLoading: false,
  error: null,
};

export type CreatePostType = {
  title: string;
  content: string;
  thumbnail: string;
};
export type UpdatePostType = CreatePostType & {
  post_id: number;
};

export const getPostsThunk = createAsyncThunk("post/getPosts", async (payload: any, thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:3000/api/getPostList");
    return thunkAPI.fulfillWithValue(res.data.data);
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

// createSlice
const postSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteError: (state: PostListState) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getPostsThunk.pending, (state: PostListState, action: PayloadAction<null>) => {
        state.isLoading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state: PostListState, action: PayloadAction<[PostState]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state: PostListState, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// action export
export const { deleteError } = postSlice.actions;

// export slice
export default postSlice.reducer;
