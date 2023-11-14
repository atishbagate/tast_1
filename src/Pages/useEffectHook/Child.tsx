import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Child = () => {

    const [count,setCount] = useState(0);
    const ClickHandler = () => {
        // console.log("ClickHandler called");
        setCount((prevValue)=>prevValue + 1);
    }
    useEffect(()=>{
        console.log("on load called",count);

        return function () {
            console.log("x unmount called",count);
            setCount(0);
        }
    },[]);

    useEffect(()=>{
        console.log("useEffect called",count);
 
    },[count]);

    return (
        <>
        <h2>Child Comopent</h2>
        <h4>count is - {count}</h4>
        <Button onClick={ClickHandler}>Click here</Button>
        </>
    )
}

export default Child;