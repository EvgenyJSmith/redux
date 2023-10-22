import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counerReducer from './reducers/CounterSlice';
import userReducer from './reducers/UserSlice';
import userThunkReducer from './reducers/UserSliceThunk'
import { postAPI } from "../services/PostService";


const rootReducer = combineReducers({
    counerReducer,
    userReducer,
    userThunkReducer,

    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

        middleware: (getDefaultMiddleware)=>(
            getDefaultMiddleware().concat(postAPI.middleware)
        )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
