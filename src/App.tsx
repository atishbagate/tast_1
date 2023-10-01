import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home/Home";

 
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Counter />} /> 
    <Route path="/home" element={<Home/>} />
    </>
  )
)