import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// initialState type
export interface UserState {
  user: {
    user_id: number;
    id: string;
    created_at: string;
    name: string;
    isAdmin: number;
  } | null;
}

// initialState
const initialState: UserState = {
  user: null,
};

export interface SignInType {
  id: string;
  password: string;
}

export const signInUser = createAsyncThunk("user/fetchAsync", async (payload: SignInType, thunkAPI) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/sign?id=${payload.id}&password=${payload.password}`);
    const { id, user_id, created_at, name, isAdmin } = res.data.data;
    return thunkAPI.fulfillWithValue({ id, user_id, created_at, name, isAdmin });
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

// createSlice
const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    signOutUser: (state: UserState, action: PayloadAction<number>) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state) => {});
  },
});

// action export
export const { signOutUser } = userSlice.actions;

// export slice
export default userSlice;

// // Action Types
// const SIGN_IN = "SIGN_IN";
// const SIGN_OUT = "SIGN_OUT";

// // Type for payload
// export interface UserType {
//   user_id: number;
//   id: string;
//   password: string;
//   created_at: string;
//   name: string;
//   isAdmin: number;
// }

// // Action Creators
// export const signIn = (payload: UserType) => ({ type: SIGN_IN, payload });
// export const signOut = () => ({ type: SIGN_OUT });

// // Initial State
// const initialState = null;

// // Reducer
// const user = (state = initialState, action: any) => {
//   switch (action.type) {
//     case SIGN_IN:
//       return action.payload;
//     case SIGN_OUT:
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default user;
