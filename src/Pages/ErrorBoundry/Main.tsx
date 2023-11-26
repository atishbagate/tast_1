import { useState } from "react";
import ErrorBoundry from "./ErrorBoundryInClassComponent"
import Example1 from "./Example1"
import { Button } from "@mui/material";
 import { ErrorBoundary } from "react-error-boundary";
import Example2 from "./Example2";

function Main() {

    const [count, setCount] = useState(0);
    const [functionCount,setFunctionCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    const handleClickFunction = () => {
        setFunctionCount(functionCount + 1);
    }
    return (
        <>
            <p>Error Boundry Example.</p>
            <ErrorBoundry>
                <Example1 count={count} />
            </ErrorBoundry>
            <Button variant="contained" onClick={handleClick}>Add</Button>
            <br />
            <br />
            <br />
            <p>Error Boundry in Functional Component.</p>
            <ErrorBoundary fallback={<h2>This is Fallback Component.</h2>}>
            <Example2 functionCount={functionCount} />
            </ErrorBoundary>
            <Button variant="contained" onClick={handleClickFunction}>Add</Button>

        </>
    )
}

export default Main
