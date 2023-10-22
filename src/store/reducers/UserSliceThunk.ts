import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsersThunk } from "./ActionCreatorUserThunk";


export interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSliceThunk = createSlice({
    name: 'userThunk',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchUsersThunk.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },

        [fetchUsersThunk.pending.type]: (state) => {
            state.isLoading = true;
        },

        [fetchUsersThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    },
})

export default userSliceThunk.reducer
