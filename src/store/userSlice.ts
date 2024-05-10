import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    IDataErrorResponse,
    IAuthSuccessResponse,
    IProfile,
    TypeAuthResponse,
    TypeProfileResponse, IUser,
} from "src/api/types";
import {makeQuery} from "src/api";
import {setError} from "src/store/appSlice";


export const auth = createAsyncThunk(
    "user/auth",
    async ({email, password}: { email: string, password: string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await makeQuery<TypeAuthResponse>('signin', 'POST', {email, password});
            if (!response.ok) {
                const error = (response.data as IDataErrorResponse)
                dispatch(setError({
                    error: error.errors[0].message,
                    code: error.errors[0].extensions.code
                }))
            }
            return response;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const fetchProfile = createAsyncThunk(
    "user/fetchProfile",
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const response = await makeQuery<TypeProfileResponse>('profile', 'GET', null, true);
            if (!response.ok) {
                const error = (response.data as IDataErrorResponse)
                dispatch(setError({
                    error: error.errors[0].message,
                    code: error.errors[0].extensions.code
                }))
            }
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

interface UserState {
    access_token?: string | null,
    userInfo: IUser | null,
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
        logoutUser: (state) => {
            state.access_token = null;
            state.userInfo = null;
            state.isAuthenticated = false;
            localStorage.removeItem('access_token');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('isAuthenticated');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(auth.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const {token} = (payload.data as IAuthSuccessResponse)
                    state.access_token = token;
                    state.isAuthenticated = true;
                    localStorage.setItem('access_token', token);
                    localStorage.setItem('isAuthenticated', String(true));
                }
            })
        builder
            .addCase(fetchProfile.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const {id, name, email, signUpDate} = (payload.data as IProfile)
                    state.userInfo = {
                        id: id,
                        name: name,
                        email: email,
                        signUpDate: signUpDate,
                    };
                    localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
                }
            })
    },
});

export const {
    logoutUser,
} = userSlice.actions;

export const selectToken = (state: { user: UserState }) => state.user.access_token;
export const selectIsAuth = (state: { user: UserState }) => state.user.isAuthenticated;
export const selectUserInfo = (state: { user: UserState }) => state.user.userInfo;
export default userSlice.reducer;