import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//constance
const baseQuery = fetchBaseQuery({baseUrl:"https://dummyjson.com"})
const tagTypes  = ['Products']
export const productsApiSlice = createApi({
  tagTypes,
  baseQuery,
  endpoints:(build)=>({
    getProductList: build.query({
      query:()=>{
        return {
          url:"/products"
        }
      }
    })
  })
})
export const {useGetProductListQuery}= productsApiSlice;
