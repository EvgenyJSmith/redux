import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counerReducer from './reducers/CounterSlice';
import userReducer from './reducers/UserSlice'


const rootReducer = combineReducers({
    counerReducer,
    userReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
