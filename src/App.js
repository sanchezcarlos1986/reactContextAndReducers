import MyComponent from "./components/MyComponent";
import StoreProvider from "./store/StoreProvider";
import { StateInspector } from "reinspect";

function App() {
  return (
    <StateInspector name="Mansa App">
      <StoreProvider>
        <MyComponent />
      </StoreProvider>
    </StateInspector>
  );
}

export default App;
