import { useState } from "react";
import ErrorBoundry from "./ErrorBoundry"
import Example1 from "./Example1"
import { Button } from "@mui/material";
 

function Main() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <p>Error Boundry Example.</p>
            <ErrorBoundry>
                <Example1 count={count} />
            </ErrorBoundry>
            <Button variant="contained" onClick={handleClick}>Add</Button>
        </>
    )
}

export default Main
