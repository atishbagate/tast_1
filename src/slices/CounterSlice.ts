import { Slice,createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../store";

interface ICounter {
count:number,
}
const initialState:ICounter = {
count:1,
}

export const CounterSlice:Slice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
       setCount : (state,action:PayloadAction<number>) => {
        state.count = action.payload;
       },
       resetCount : () => initialState
    }
})

export const {setCount, resetCount} = CounterSlice.actions;

export const selectCount = (state:RootState) => state.Counter.count;

export default CounterSlice.reducer;
