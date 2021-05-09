import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/StoreProvider";
import { StateInspector } from "reinspect";
import { initialState, combineReducers } from "./reducers/";

import userReducer from "./reducers/userReducer";
import productsReducer from "./reducers/productsReducer";

const appReducers = combineReducers({
  user: userReducer,
  products: productsReducer,
});

function App() {
  return (
    <StateInspector name="Mansa App">
      <StoreProvider reducer={appReducers} initialState={initialState}>
        <MyComponent />
      </StoreProvider>
    </StateInspector>
  );
}

export default App;
