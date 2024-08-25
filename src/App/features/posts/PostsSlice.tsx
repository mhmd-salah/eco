import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl:"https://dummyjson.com"})
const tagTypes = ["Posts"]
const reducerPath = "postslist"

export const postsApiSlice = createApi({
  tagTypes,
  reducerPath,
  baseQuery,
  endpoints:(build)=> ({
    getPostsList:build.query({
      query:(arg)=>{
        console.log(arg)
        return {
          url:"/posts"
        }
      }
    })
  }),
})
export const {useGetPostsListQuery} = postsApiSlice