import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface CountState{
    count: number
}

const initialState: CountState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>){
            state.count += action.payload;
        },
        decrement(state, action: PayloadAction<number>){
            state.count -= action.payload;
        },
        reset(state, action: PayloadAction<number>){
            state.count = action.payload;
        }
    }
})

export default counterSlice.reducer