import { Slice,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "../../store";
import axios from "axios";
import API_Endpoints from "../utils/API_Endpoints";


export const fetchPOSTS = createAsyncThunk<unknown | null , {value : number}>(
    'counter/fetchPOSTS',
    async ({value=0},thunkAPI) => {
        const dispatch = thunkAPI.dispatch;
        const state : RootState = await thunkAPI.getState();
        const res: any = await axios.get(API_Endpoints.GET_POST)

        if(res != null){
            console.log("List ",res);
            if (res.data){
                return res.data as unknown;
            }
        }
    }
)

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
