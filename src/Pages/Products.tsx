import { useProducts } from "../CustomHooks";
import { useEffect } from "react";
import { getProductsList } from "../App/features/products/productSlice";
import { useAppDispatch } from "../App/Hooks";

function Products() {
  const {data:products,isLoading,error} = useProducts()
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getProductsList())
  },[dispatch])
  
  if(isLoading) return <h1>loading</h1>
  if(error) return <h1>{error.message}</h1>
  return (
    <div className="flex flex-wrap *:min-w-96">
      {
        products&&[].map(product=><h1>{product}</h1>)
      }
    </div>
  );
}

export default Products