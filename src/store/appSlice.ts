import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "src/store/index";

interface appState {
    isAppInitialized: boolean,
    error: {
        message: string,
        code: string
    }
}

const initialState: appState = {
    isAppInitialized: false,
    error: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppInitialized: (state) => {
            state.isAppInitialized = true;
        },
        setError: (state, {payload}) => {
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {setAppInitialized, setError, clearError} = appSlice.actions;
export const selectIsAppInit = (state: RootState) => state.app.isAppInitialized;
export const selectAppError = (state: RootState) => state.app.error;
export default appSlice.reducer;