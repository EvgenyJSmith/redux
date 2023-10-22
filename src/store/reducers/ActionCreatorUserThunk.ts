import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsersThunk = createAsyncThunk(
    "user/fetchAll",
    async (_, thinkAPI) => {
        try {
            const response = await axios.get<IUser[]>(
                "https://jsonplaceholder.typicode.com/users"
            );
            return response.data;
        }
        catch (e) {
            return thinkAPI.rejectWithValue("Не удалось загрузить пользователей");
        }
    }
);
