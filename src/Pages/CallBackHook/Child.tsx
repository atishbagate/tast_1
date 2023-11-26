import { Button } from "@mui/material";
import { memo } from "react";

const Child = ({ addByTenCallback, counterCallback }) => {

    return (
        <>
            {
                console.log("Child component")
            }
            <h2>Child component</h2>
            <br />
            {/* <Button onClick={counter}>Callback Button</Button>  */}
            <Button onClick={counterCallback}>Callback Button</Button>
            <br /><br /><br />
            <p>When use call back is used -- <br />
                this callback is used when the we want to stop rendering of child component.
                new wrape child component in React.memo.
                after that we will choose convert the parent function using useCallback hook.
                by wrapping it into useCallback hook we makes new instance only once during loadling.
                later we create.
                <br />
                useCallback hook makes the function memoize and send it to child component.

                <br />
                when to use Callback hook
                <br />
                1. if Child component is used in many locations. and it recieves a function then it will render every time parent component renders.
                to stop this unexpected child component rendering we will use Callback hook.
                <br />
                2. if any function taking lots of time to execute. and that function is passed to Child component.
                then we will use Callback function to memoize function and send it to child. so that it will not execute every time value changes.
                <br />
                3. if the function is defined and use in useEffect and will re render every time dependency value changes.
                then function also executes. to stop this function execution we will use useCallback to stop execution of function every time value changes.
                <br /><span>.... ex for point 3 </span>
                <Button onClick={addByTenCallback}>Callback Add By 10 Button</Button>
            </p>
        </>
    )
}

export default memo(Child);