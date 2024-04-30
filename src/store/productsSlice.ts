import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {generateRandomProducts} from "src/components/helpers";
import {IProduct} from "src/types/productTypes";
import {RootState} from "src/store/index";

const initialState:IProduct[] = [];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadMoreProducts(state) {
            return [...state, ...generateRandomProducts(12)];
        },
        addProduct(state, action: PayloadAction<Omit<IProduct, "id">>) {
            const id = state.length > 0 ? (state[state.length - 1].id as number) + 1 : 1;
            return [...state, { id, ...action.payload }];
        },
        updateProduct(state, action: PayloadAction<IProduct>) {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { loadMoreProducts, addProduct, updateProduct } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;