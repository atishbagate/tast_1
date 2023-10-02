import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

 
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="*" element = {<ErrorPage/>} />
    <Route path="/" element={<Counter />} /> 
    <Route path="/home" element={<Home/>} />
    </>
  ) 
)