// новое состояние, 

import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface CountState{
    count: number
}

// инициализатор состояния
const initialState: CountState = {
    count: 0,
}

// слайс редюссер для использования в компоненте
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

// редюссер отдельно для комбайн редюссера
export default counterSlice.reducer