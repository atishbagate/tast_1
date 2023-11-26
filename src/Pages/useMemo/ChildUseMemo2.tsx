import { TextField } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";

const ChildUseMemo2 = () => {
    const [number, setNumber] = useState(0);

    const [increment, setIncrement] = useState(0);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        setNumber(Number(e.target.value));
    }

    const sqrtOf = (n:number):number=> {
        console.log("SQRT called.");
        
        return n <=0 ? 1 : n*n;
    }
    const sqrt = useMemo(()=> sqrtOf(number),[number]);

    const counterAdd = () => {
        setIncrement((prevValue) => prevValue + 1);
    }

    return (
        <>
            <h2>ChildUseMemo2</h2> 
            <p>Square Root of {number} is called - {sqrt}</p>
            <TextField label="Factorial of " variant="outlined" type="number" value={number} onChange={onChangeHandler} />
            <h5>Counter : {increment}</h5>
            <button onClick={counterAdd}>Click</button>
        </>
    )
}

export default ChildUseMemo2;