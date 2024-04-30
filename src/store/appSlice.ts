import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "src/store/index";

const initialState = {
    isAppInitialized: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppInitialized: (state) => {
            state.isAppInitialized = true;
        },
    },
});

export const { setAppInitialized } = appSlice.actions;
export const selectIsAppInit = (state: RootState) => state.app.isAppInitialized;
export default appSlice.reducer;