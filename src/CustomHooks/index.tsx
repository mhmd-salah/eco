import { Iproducts } from "../Types";
import { useQuery } from "@tanstack/react-query";
import { api } from "../Api";

const fetchProducts = async() =>{
  const response =await api.get<{products:Iproducts[]}>("products")
  return response.data.products
}

export const useProducts = ()=>{
  return useQuery<Iproducts[]>({
    queryKey:["products"],
    queryFn:fetchProducts,
  })
}

export interface Iposts   {
      id: number,
      title:string,
      tags: string[],
      reactions: {
        likes: number,
        dislikes: number
      },
      views: number,
      userId: number
    }

const fetchPosts = async():Promise<Iposts[]> =>{
  const response = await api.get<{ posts: Iposts[] }>("posts");
  return response.data.posts
}

export const usePosts = ()=>{
  return useQuery<Iposts[]>({
    queryKey:[`posts`],
    queryFn:fetchPosts
  })
}

