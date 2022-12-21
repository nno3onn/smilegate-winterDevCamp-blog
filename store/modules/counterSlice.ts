import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// initialState type
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// initialState
const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const fetchAsync = createAsyncThunk("counter/fetchAsync", async (text: string) => {
  console.log("thunk... payload", text);
  const res = await axios.get("https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits");
  console.log("thunk... res", res);
  return res.value;
});

// createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusCounter: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    minusCounter: (state: CounterState, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// action export
export const { plusCounter, minusCounter } = counterSlice.actions;

// export slice
export default counterSlice;

//! client에서만 사용하는 redux인 경우
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // initialState type
// type StateType = {
//   value: number;
// };

// // initialState
// const initialState: StateType = { value: 0 };

// // createSlice
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     plusCounter: (state: StateType, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//     minusCounter: (state: StateType, action: PayloadAction<number>) => {
//       state.value -= action.payload;
//     },
//   },
// });

// export const { plusCounter, minusCounter } = counterSlice.actions;

// export default counterSlice;
