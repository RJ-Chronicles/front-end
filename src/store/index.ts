import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slice/appSlice";
export const store = configureStore({
    reducer: {
        app: appSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;