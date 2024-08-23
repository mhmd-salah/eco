import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const productsSlice = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
//   tagTypes:['products'],
//   endpoints: builder => ({
//     getProductsList: builder.query({
//       query(arg) {
        
//       },
//     })
//   })
  
// })

// constance
const baseQuery = fetchBaseQuery({ baseUrl: "https://dummyjson.com" })
const tagTypes = ['products'];
const endpoints = (builder) => ({
    getProductsList: builder.query({
      query: (arg) => {
        
      },
    })
  })

const productsSlice = createApi({
  baseQuery,
  tagTypes,
  endpoints
});


