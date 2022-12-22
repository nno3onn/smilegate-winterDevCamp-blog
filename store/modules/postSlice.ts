import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// initialState type
export type PostState = {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
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

export const getPosts = createAsyncThunk("post/getPosts", async (payload: PayloadAction<void>, thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:3000/api/getPostList");
    console.log(res);
    return thunkAPI.fulfillWithValue(res.data.data);
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const createPost = createAsyncThunk("post/createPost", async (payload: PayloadAction<CreatePostType>, thunkAPI) => {
  try {
    const { title, content, thumbnail } = payload;
    console.log(title, content, thumbnail);
    const res = await axios.post(`http://localhost:3000/api/post`, {
      title,
      content,
      thumbnail,
    });
    const post_id = res.data.data;
    return thunkAPI.fulfillWithValue({ post_id, title });
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const updatePost = createAsyncThunk("post/updatePost", async (payload: PayloadAction<UpdatePostType>, thunkAPI) => {
  try {
    const { post_id, title, content, thumbnail } = payload;
    const res = await axios.patch(`http://localhost:3000/api/post`, {
      post_id,
      title,
      content,
      thumbnail,
    });
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const deletePost = createAsyncThunk("post/deletePost", async (post_id: PayloadAction<number>, thunkAPI) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/post?post_id=${post_id}`);
    console.log(res);
    return res.data.data;
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
    // signOutUser: (state: UserState) => {
    //   return initialState;
    // },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getPosts.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(getPosts.rejected, (state) => {});

    builder
      .addCase(createPost.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(createPost.rejected, (state) => {});

    builder
      .addCase(updatePost.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(updatePost.rejected, (state) => {});

    builder
      .addCase(deletePost.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(deletePost.rejected, (state) => {});
  },
});

// action export
export const {} = postSlice.actions;

// export slice
export default postSlice;
