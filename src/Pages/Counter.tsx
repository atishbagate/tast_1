import  {MouseEvent} from 'react';
import { Post_Counter, selectCount, setCount } from "../slices/CounterSlice";
import { useAppDispatch, useAppSelector } from "../slices/appHooks"
import Button from '@mui/material/Button';
 
export default function Counter() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCount);


const addHandler = (e:MouseEvent<HTMLButtonElement>) :void => {
  e.preventDefault(); 
  dispatch(setCount(Number(counter) + 1)) 
  dispatch(Post_Counter())

}
const subtractHandler= (e:MouseEvent<HTMLButtonElement>) :void => {
  e.preventDefault(); 
  dispatch(setCount(Number(counter) - 1))
  dispatch(Post_Counter())
}

  return (
    <div>
      <p>Counter</p>
      <h2 className='pl-3'>{counter}</h2> 
      <Button variant="contained"onClick={addHandler}>Add</Button> 
      <Button variant="contained" onClick={subtractHandler}>Subtract</Button>
    </div>
  )
}
