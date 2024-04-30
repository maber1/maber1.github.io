import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "src/store/index";
import {IProduct} from "src/api/types";

export interface ICartProduct extends IProduct {
    quantity?: number
}

interface CartState {
    products: ICartProduct[]
}

const initialState: CartState = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            const existingItem = state.products.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                existingItem.quantity += itemToAdd.quantity || 1;
            } else {
                state.products.push({...itemToAdd, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(item => {
                return item.id !== action.payload
            });
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export const selectCartProducts = (state: RootState) => state.cart;
export default cartSlice.reducer;