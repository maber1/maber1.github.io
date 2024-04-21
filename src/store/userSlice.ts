import {createSlice} from "@reduxjs/toolkit";

const userData = {
    id: "2",
    name: "adm",
    email: "adm@aaa.aa",
    isAdmin: true,
}
interface User {
    id: string,
    name: string,
    email: string,
    isAdmin: boolean,
}

interface UserState {
    access_token?: string | null,
    userInfo: User | null,
    isAuthenticated: boolean,
}

const initialState: UserState = {
    access_token: localStorage.getItem('access_token') || null,
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
    isAuthenticated: Boolean(localStorage.getItem('isAuthenticated')) || false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state) => {
            const token = [...Array(16)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
            state.access_token = token;
            state.userInfo = userData;
            state.isAuthenticated = true;
            localStorage.setItem('access_token', token);
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
            localStorage.setItem('isAuthenticated', String(true));
        },
        logoutUser: (state) => {
            state.access_token = null;
            state.userInfo = null;
            state.isAuthenticated = false;
            localStorage.removeItem('access_token');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('isAuthenticated');
        },
        setAdmin: (state) => {
            state.userInfo.isAdmin = !state.userInfo.isAdmin;
            state.userInfo = {...state.userInfo, isAdmin: state.userInfo.isAdmin}
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },
    },
});

export const {loginUser, logoutUser, setAdmin} = userSlice.actions;
export const selectToken = (state: {user: UserState}) => state.user.access_token;
export const selectIsAuth = (state: {user: UserState}) => state.user.isAuthenticated;
export const selectUserInfo = (state: {user: UserState}) => state.user.userInfo;
export const selectIsAdmin = (state: {user: UserState}) => state.user.userInfo?.isAdmin;
export default userSlice.reducer;