import { useGetProductListQuery } from "../App/features/products/ProductsSlice";


function Products() {
  const {isLoading , data, error} = useGetProductListQuery()

  console.log(data , isLoading,error)
  return (
    <div className="flex flex-wrap *:min-w-96">
      {/* {data?.products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))} */}
    </div>
  );
}

export default Products;
