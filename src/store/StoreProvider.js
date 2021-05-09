import { createContext, useContext } from "react";
import { useReducer } from "reinspect";

const StoreContext = createContext(); // Provider & Consumer

const StoreProvider = ({ reducer, initialState = {}, children }) => {
  const [store, dispatch] = useReducer(
    reducer,
    initialState,
    (state) => state,
    "store"
  );
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { useStore, useDispatch };
export default StoreProvider;
