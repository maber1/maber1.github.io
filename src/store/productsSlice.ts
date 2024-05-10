import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "src/store/index";
import {makeQuery} from "src/api";
import {
    IDataErrorResponse,
    TypeProductResponse,
    TypeProductsResponse,
    IProduct,
    IProducts,
} from "src/api/types";
import {setError} from "src/store/appSlice";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, {getState, rejectWithValue, dispatch}) => {
        const {products} = getState() as RootState;
        const params = {pagination: products.pagination, sorting: products.sorting};
        try {
            const response = await makeQuery<TypeProductsResponse>('products', 'GET', null, true, params);
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
export const addProduct = createAsyncThunk(
    "products/addProduct",
    async ({...product}: IProductData, {rejectWithValue, dispatch}) => {
        try {
            const response = await makeQuery<TypeProductResponse>('products', 'POST', product, true);
            if (!response.ok) {
                const error = (response.data as IDataErrorResponse)
                dispatch(setError({
                    error: error.errors[0].message,
                    code: error.errors[0].extensions.code
                }));
            }
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);
export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async ({...product}: IProductData & { id: string }, {rejectWithValue, dispatch}) => {
        try {
            const response = await makeQuery<TypeProductResponse>(`products/${product.id}`, 'PUT', product, true);
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

interface IProductData {
    name: string,
    photo?: string,
    desc?: string,
    oldPrice?: number,
    price: number,
    categoryId: string,
}

const initialState: IProducts = {
    data: [],
    pagination: {
        pageSize: 8,
        pageNumber: 1,
        total: 0,
    },
    sorting: {
        type: 'ASC',
        field: 'name',
    }
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadMoreProducts(state) {
            state.pagination.pageNumber++;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const {
                        data,
                        sorting,
                        pagination
                    } = (payload.data as IProducts)
                    state.data.push(...data);
                    state.sorting = sorting;
                    state.pagination = pagination;
                }
            })
        builder
            .addCase(addProduct.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const product = (payload.data as IProduct);
                    state.data.push(product);
                }
            })
        builder
            .addCase(updateProduct.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const product = (payload.data as IProduct);
                    const index = state.data.findIndex(searchProduct => searchProduct.id === product.id);
                    if (index !== -1) {
                        state.data[index] = product;
                    }
                }
            })
    },
});

export const {loadMoreProducts} = productsSlice.actions;
export const selectPagination = (state: RootState) => state.products.pagination;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;