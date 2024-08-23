import { useEffect } from "react";
import { getProductsList } from "../App/features/products/CreateAsyncThunkEx";
import { useAppDispatch } from "../App/Hooks";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";

function Products() {
  // const {data:products,isLoading,error} = useProducts()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsList());
  }, [dispatch]);
  const data = useSelector((state: RootState) => state.products.data);
  console.log(data);

  return (
    <div className="flex flex-wrap *:min-w-96">
      {data?.products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
}

export default Products;
