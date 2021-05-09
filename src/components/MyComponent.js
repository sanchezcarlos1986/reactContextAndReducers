import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from "../store/storeReducer";
import { useState } from "reinspect";

function MyComponent() {
  const { user, products } = useStore();
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  return (
    <div className="MyComponent">
      <h1>MyComponent</h1>
      <h2>User: {user?.name}</h2>
      {!user ? (
        <div>
          <input
            id="name"
            name="name"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      ) : null}

      {user ? (
        <button onClick={() => dispatch({ type: types.authLogout })}>
          Logout
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: types.authLogin, payload: { id: 1, name } })
          }
        >
          Login
        </button>
      )}

      <h2>Products</h2>
      <ul>
        {Array.isArray(products)
          ? products.map(({ id, title }) => <li key={id}>{title}</li>)
          : null}
      </ul>
      <button onClick={() => dispatch({ type: types.productsDeleteAll })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: types.productsChange })}>
        Change
      </button>
    </div>
  );
}

export default MyComponent;
