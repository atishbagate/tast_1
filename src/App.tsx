import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Counter from "./Pages/Counter";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Parent from "./Pages/CallBackHook/Parent";
import ParentUseEffect from "./Pages/useEffectHook/Parent";
import UseRefParent from "./Pages/useRef/UseRefParent";
import ParentUseMemo from "./Pages/useMemo/ParentUseMemo";
import ParentUseReducer from "./Pages/UseReducer/ParentUseReducer";
import ParentCustomHok from "./Pages/CustomHook/ParentCustonHook";
import FunctionCurrying from "./Pages/FunctionCurrying/FunctionCurrying";
 
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="*" element = {<ErrorPage/>} />
    <Route path="/" element={<Counter />} /> 
    <Route path="/home" element={<Home/>} />
    <Route path="/parent" element={<Parent/>} />
    <Route path="/useEffect" element={<ParentUseEffect/>} />
    <Route path="/useRefParent" element={<UseRefParent />} />
    <Route path="/useMemo" element={<ParentUseMemo /> } />
    <Route path="/ParentUseReducer" element={<ParentUseReducer/>} />
    <Route path="/ParentCustomHok" element={<ParentCustomHok/>} />
    <Route path="/FunctionCurrying" element={<FunctionCurrying/>} />
    </>
  ) 
)