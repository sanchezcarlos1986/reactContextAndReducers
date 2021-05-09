import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from "../types";

function Products() {
  const { products } = useStore();
  const dispatch = useDispatch();

  return (
    <div className="Products">
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

export default Products;
