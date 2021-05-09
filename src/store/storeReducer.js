const types = {
  authLogout: "@auth/logout",
  authLogin: "@auth/login",
  productsDeleteAll: "@products/delete",
  productsChange: "@products/change",
};

const initialStore = {
  user: { id: 1, name: "Carlos" },
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
};

const storeReducer = (state, action) => {
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

export { initialStore, types };
export default storeReducer;
