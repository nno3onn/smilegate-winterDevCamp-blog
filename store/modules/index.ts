import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import user from "./user";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({
        user,
      })(state, action);
  }
};

export default rootReducer;
