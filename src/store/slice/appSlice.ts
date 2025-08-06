import { createSlice } from "@reduxjs/toolkit";

interface AppGlobalState {
    isLoading: boolean;
    error: string | null;
    success: string | null;
}

const initialState: AppGlobalState = {
    isLoading: false,
    error: null,
    success: null,
}

const appSlice = createSlice({
    name: "AppGlobalState",
    initialState,
    reducers: {
        setLoading: (state, action)=> {
            state.isLoading = action.payload;
        },
        setError: (state, action)=> {
            state.error = action.payload;
        },
        setSuccess: (state, action) => {
            state.success = action.payload
        }
    }
});

export const {setLoading, setError, setSuccess} = appSlice.actions;

export default appSlice.reducer;