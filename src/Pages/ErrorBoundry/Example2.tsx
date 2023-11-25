import { useEffect } from "react";
import { fetchPOSTS } from "../../slices/CounterSlice";
import { useAppDispatch } from "../../slices/appHooks";

interface Props { }

function Example2(props: Props) {
    const { functionCount } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
       if(functionCount === 5){
        dispatch(fetchPOSTS({value:weqe}))
       }
       else{
        console.log("functionCounter : ",functionCount);
       }
      }, [functionCount, dispatch]);

    return (
        <>
            <h1>Example 2 for Error Boundry.</h1>
            <h2>API will Call when functionCounter will be at 5. and Error Occure in API calling. result into sending fallback API.</h2>
            <h3>functionCount : {functionCount}</h3>
        </>
    )
}

export default Example2
