import  {MouseEvent} from 'react';
import { selectCount, setCount } from "../slices/CounterSlice";
import { useAppDispatch, useAppSelector } from "../slices/appHooks"

 
export default function Counter() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);

const addHandler = (e:MouseEvent<HTMLButtonElement>) :void => {
  e.preventDefault();
  // alert("button Clicked");
  dispatch(setCount(Number(counter) + 1))
}
const subtractHandler= (e:MouseEvent<HTMLButtonElement>) :void => {
  e.preventDefault();
  // alert("button Clicked");
  dispatch(setCount(Number(counter) - 1))
}

  return (
    <div>
      <p>Counter</p>
      <h2>{counter}</h2>
      <button onClick={addHandler}>Add</button>
      <button onClick={subtractHandler}>Subtract</button>
    </div>
  )
}
