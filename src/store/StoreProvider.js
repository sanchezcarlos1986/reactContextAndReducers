import { createContext, useContext } from "react";
import storeReducer, { initialStore } from "./storeReducer";
import { useReducer } from "reinspect";

const StoreContext = createContext(); // Provider & Consumer

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(
    storeReducer,
    initialStore,
    (state) => state,
    "reducerID"
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
