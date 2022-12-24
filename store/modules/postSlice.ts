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

export const createPostThunk = createAsyncThunk("post/createPost", async (payload: PayloadAction<CreatePostType>, thunkAPI) => {
  try {
    const { title, content, thumbnail } = payload;
    console.log(title, content, thumbnail);
    const res = await axios.post(`http://localhost:3000/api/post`, {
      title,
      content,
      thumbnail,
    });
    const { post_id } = res.data.data;
    console.log(post_id);
    return thunkAPI.fulfillWithValue({ post_id, title, content, thumbnail });
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const updatePostThunk = createAsyncThunk("post/updatePost", async (payload: PayloadAction<UpdatePostType>, thunkAPI) => {
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

export const deletePostThunk = createAsyncThunk("post/deletePost", async (post_id: PayloadAction<number>, thunkAPI) => {
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
      })

      .addCase(createPostThunk.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        const { post_id, title, content, thumbnail } = action.payload;
        console.log(action.payload);
        // state.posts = [...state.posts, action.payload]
      })
      .addCase(createPostThunk.rejected, (state: PostListState, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updatePostThunk.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(updatePostThunk.rejected, (state: PostListState, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deletePostThunk.fulfilled, (state: PostListState, action: PayloadAction<PostState>) => {
        return action.payload;
      })
      .addCase(deletePostThunk.rejected, (state: PostListState, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// action export
export const { deleteError } = postSlice.actions;

// export slice
export default postSlice.reducer;
