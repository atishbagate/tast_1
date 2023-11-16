import { Button } from "@mui/material";
import { useMemo, useState } from "react";

const ChildUseMemo = ({arr}) => {
    

    const [count, setCount] = useState(0);

    console.log("Child component render.");

    // const validNumberfunction = arr.filter(num => num % 2);

    const validNumber =  useMemo(()=>{
        console.log("validNumber useMemo called .");
        const arrFilter = arr.filter(num => num % 2);

        return {arrFilter}

    },[arr]);

    console.log("validNumber,,",validNumber);
    
    
    
    function counterHandler() {
        
        // console.log("handle counter triggered");
        setCount((prevValu) => prevValu + 1);
    }


    return (
        <>
            <h2>ChildUseMemo</h2>
            <h2>Count : {count}</h2>
            <Button onClick={counterHandler}>Add</Button>
            {arr.map((item, key) => (
                <li key={key}>Count : {item}</li>
            ))}
        </>
    )
}

export default ChildUseMemo;