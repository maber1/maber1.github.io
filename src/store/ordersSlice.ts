import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "src/store/index";
import {
    IDataErrorResponse, IOrder,
    IOrderStatus, IPagination,
    ISorting, TypeOrderResponse
} from "src/api/types";
import {makeQuery} from "src/api";
import {setError} from "src/store/appSlice";
import {clearCart} from "src/store/cartSlice";

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async (_, {getState, rejectWithValue, dispatch}) => {
        const {orders} = getState() as RootState;
        const params = {pagination: orders.pagination, sorting: orders.sorting};
        try {
            const response = await makeQuery<TypeOrderResponse>('orders', 'GET', null, true, params);
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
export const addOrder = createAsyncThunk(
    "orders/addOrder",
    async ({...order}: IOrderData, {rejectWithValue, dispatch}) => {
        try {
            const response = await makeQuery<TypeOrderResponse>('orders', 'POST', order, true);
            if (!response.ok) {
                const error = (response.data as IDataErrorResponse)
                dispatch(setError({
                    error: error.errors[0].message,
                    code: error.errors[0].extensions.code
                }));
            } else {
                dispatch(clearCart())
            }
            return response;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

interface IOrderData {
    products: Array<{
        id: string;
        quantity: number;
    }>;
    status?: IOrderStatus;
}

interface OrdersState {
    data: IOrder[],
    pagination: IPagination,
    sorting: ISorting
}

const initialState: OrdersState = {
    data: [],
    pagination: {
        pageSize: 20,
        pageNumber: 1,
        total: 0,
    },
    sorting: {
        type: 'ASC',
        field: 'name',
    }
};

const cartSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addOrder.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const data = (payload.data as IOrder);
                    state.data.push(data);
                }
            })
        builder
            .addCase(fetchOrders.fulfilled, (state, {payload}) => {
                if (payload.ok) {
                    const {data} = (payload.data as IOrder & { data: IOrder[] });
                    state.data.push(...data);
                }
            })
    }
});

export const selectOrders = (state: RootState) => state.orders.data;
export default cartSlice.reducer;