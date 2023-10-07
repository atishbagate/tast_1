import {  useEffect } from "react";
import { fetchPOSTS, selectData } from "../../slices/CounterSlice"
import { useAppDispatch, useAppSelector } from "../../slices/appHooks" 
import { Button } from "@mui/material";


 const Home = () => {
  const dispatch = useAppDispatch();
  const postdata = useAppSelector(selectData);

  console.log("post data ",postdata);
  
  useEffect(() => {
    dispatch(fetchPOSTS({value:0}))
  }, [dispatch])
  

  return (
    <>
    <div>Home</div>
    {
      postdata ? <p>{postdata ? JSON.stringify(postdata) : ""}</p> : ""
    }
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    </>
  )
}

export default Home;