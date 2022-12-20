// Action Types
const SAVE_USER = "SAVE_USER";
const DELETE_USER = "DELETE_USER";

// Action Creators
export const saveUser = (payload) => ({ type: SAVE_USER, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

// Initial State
const initialState = {};

// Reducer
const user = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER:
      return state;
    case deleteUser:
      return initialState;
    default:
      return state;
  }
};

export default user;
