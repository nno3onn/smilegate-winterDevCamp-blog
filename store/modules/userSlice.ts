import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// initialState type
export type UserType = {
  user_id: number;
  id: string;
  created_at: Date;
  name: string;
  isAdmin: number;
};
export type UserState = {
  user: UserType | null;
  error: string | null;
};

// initialState
const initialState: UserState = {
  user: null,
  error: null,
};

export interface SignInType {
  id: string;
  password: string;
}

export const signInUserThunk = createAsyncThunk("user/fetchAsync", async (payload: PayloadAction<SignInType>, thunkAPI) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/sign?id=${payload.id}&password=${payload.password}`);
    const { id, user_id, created_at, name, isAdmin } = res.data.data;
    return thunkAPI.fulfillWithValue({ id, user_id, created_at, name, isAdmin });
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response?.data.message);
  }
});

// createSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(signInUserThunk.fulfilled, (state: UserState, action: PayloadAction<UserType>) => {
        state.user = action.payload;
      })
      .addCase(signInUserThunk.rejected, (state: UserState, action: PayloadAction<string>) => {
        state.error = action.payload;
      });
  },
});

// action export
export const { setInitialState } = userSlice.actions;

// export slice
export default userSlice.reducer;
