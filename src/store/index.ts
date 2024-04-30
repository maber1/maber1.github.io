import {configureStore} from '@reduxjs/toolkit';
import appReducer from "./appSlice";
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import productsReducer from "./productsSlice"

export const store = configureStore({
        reducer: {
            app: appReducer,
            user: userReducer,
            cart: cartReducer,
            products: productsReducer,
        },

        devTools: process.env.NODE_ENV !== 'production',
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;