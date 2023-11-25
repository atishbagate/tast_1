import { useEffect } from "react";
import { fetchPOSTS } from "../../slices/CounterSlice";
import { useAppDispatch } from "../../slices/appHooks";

interface Props { }

function Example1(props: Props) {
    const { count } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
       if(count === 5){
        dispatch(fetchPOSTS({value:weqe}))
       }
       else{
        console.log("counter : ",count);
       }
      }, [count, dispatch]);

    return (
        <>
            <h1>Example 1 for Error Boundry.</h1>
            <h2>API will Call when counter will be at 5. and Error Occure in API calling. result into sending fallback API.</h2>
            <h3>Count : {count}</h3>
        </>
    )
}

export default Example1
