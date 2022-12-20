// Action Types
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

// Type for payload
export interface UserType {
  user_id: number;
  id: string;
  password: string;
  created_at: string;
  name: string;
  isAdmin: number;
}

// Action Creators
export const signIn = (payload: UserType) => ({ type: SIGN_IN, payload });
export const signOut = () => ({ type: SIGN_OUT });

// Initial State
const initialState = null;

// Reducer
const user = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
