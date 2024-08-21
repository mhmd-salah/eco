import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "../Pages/RootLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Posts from "../Pages/Posts";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>} />
        <Route path="posts" element={<Posts/>} />
      </Route>
      <Route path="*" element={"not found"}/>
    </>
  )
);