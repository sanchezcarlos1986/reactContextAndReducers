import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from "../types";
import { useState } from "reinspect";

function User() {
  const { user } = useStore();
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  return (
    <div className="User">
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
    </div>
  );
}

export default User;
