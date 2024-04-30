import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "src/store/index";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemToAdd = action.payload;
            const existingItem = state.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                existingItem.quantity += itemToAdd.quantity || 1;
            } else {
                state.push({...itemToAdd, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartProducts = (state: RootState) => state.cart;
export default cartSlice.reducer;