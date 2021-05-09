import { types } from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case types.authLogout:
      return {
        ...state,
        user: null,
      };
    case types.authLogin:
      const { id, name } = action.payload;
      return {
        ...state,
        user: { id, name },
      };
    default:
      return state;
  }
};

export default userReducer;
