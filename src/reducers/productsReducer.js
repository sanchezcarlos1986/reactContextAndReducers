import { types } from "../types";

const productsReducer = (state, action) => {
  switch (action.type) {
    case types.productsDeleteAll:
      return {
        ...state,
        products: [],
      };
    case types.productsChange:
      return {
        ...state,
        products: [{ id: 3, title: "Product #3" }],
      };

    default:
      return state;
  }
};

export default productsReducer;
