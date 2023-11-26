import { useEffect, useState } from "react";
import  useCounterHook from "./useCounterHook";

const ChildCustomHook1 = () => {
   const [num,setNum] = useState(10);
    const  value = useCounterHook(num);
    console.log("data: ", value);
    useEffect(()=>{ 
        console.log("useEffect..");
        
        value.numEvenOrOdd;
    },[num]);
    const submitHandler = (e:unknown) => { 
        setNum(e.target.value);
    }
    return (
        <>
            <h4>ChildCustomHook1</h4>
            <p>The below component is the custom hook for calculation.</p>
            <div> 
                    <label htmlFor="num">Number = {num}</label>
                    <p>and its squareRoot is = {value.sqrtFun(num)} and - {value.numEvenOrOdd(num)}</p>
                    <input value={num} onChange={submitHandler} type="number" id="num"/><br /> 
            </div>
        </>
    )
}

export default ChildCustomHook1;