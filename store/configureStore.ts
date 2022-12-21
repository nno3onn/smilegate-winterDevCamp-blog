//! server redux 사용하는 경우 (next-redux-wrapper)
// 1. rootReducer(루트리듀서) 생성 -> HYDRATE 액션 처리 및 슬라이스 통합
// 2. store 생성함수 만듦 (configureStore)
// 3. next-redux-wrapper 라이브러리의 wrapper를 만들어 export 하기

// import { configureStore, Reducer, AnyAction, ThunkAction, Action, CombinedState } from "@reduxjs/toolkit";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import { combineReducers } from "redux";
// import logger from "redux-logger";

// import counterSlice, { CounterState } from "./modules/counterSlice";

// // reducer state type
// export interface ReducerStates {
//   counter: CounterState;
// }

// // rootReducer 생성 (사용 메뉴얼일 뿐 그냥 따라서 해주기만 하면 됨)
// // 1) next-redux-wrapper의 HYDRATE 액션 정의
// // 2) 슬라이스 통합
// const rootReducer = (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates> => {
//   switch (action.type) {
//     case HYDRATE:
//       return action.payload;

//     // 슬라이스 통합
//     default: {
//       const combinedReducer = combineReducers({
//         counter: counterSlice.reducer,
//       });
//       return combinedReducer(state, action);
//     }
//   }
// };

// // store 생성 함수
// const makeStore = () => {
//   const store = configureStore({
//     reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   });
//   return store;
// };

// // ### 타입 익스포트
// export type AppStore = ReturnType<typeof makeStore>; // store 타입
// export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
// // export type RootState = ReturnType<AppStore['getState']>; // RootState 타입(위와 동일함)
// export type AppDispatch = AppStore["dispatch"]; // dispatch 타입
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>; // Thunk 를 위한 타입

// // ### next-redux-wrapper의 wrapper 생성
// const wrapper = createWrapper<AppStore>(makeStore, {
//   debug: process.env.NODE_ENV === "development",
// });

// // wrapper 익스포트
// export default wrapper;

//! client redux 사용하는 경우
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterSlice from "./modules/counterSlice";
import logger from "redux-logger";
import userSlice from "./modules/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(logger),
  });
  return store;
};

export default makeStore();

export type RootState = ReturnType<typeof makeStore>;

//! 첨에 한거
// import { applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // localStorage
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { createWrapper } from "next-redux-wrapper";

// import rootReducer from "./modules";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const makeConfiguredStore = (reducer) =>
//   configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
//     devTools: false,
//   });

// const makeStore = () => {
//   const isServer = typeof window === "undefined";
//   if (isServer) {
//     return makeConfiguredStore(rootReducer);
//   }

//   const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const store = makeConfiguredStore(persistedReducer);
//   const persistor = persistStore(store);
//   return { persistor, ...store };
// };
// const wrapper = createWrapper(makeStore);

// export default wrapper;
