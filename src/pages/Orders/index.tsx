import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "src/hooks";
import {IOrder} from "src/api/types";
import {fetchOrders, selectOrders} from "src/store/ordersSlice";

const Orders = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(selectOrders) || [];

    useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    return (
        <>
            {
                orders.map((item: IOrder) => (
                    <div key={item.id} style={{marginBottom: 30}}>
                        {item.id}
                        <ul>
                            {item.products.map(item => <li style={{paddingLeft: '20px'}}
                                                           key={item.product?.id}>{item.product.name} - {item.quantity} шт</li>)}
                        </ul>
                        status: {item.status}
                    </div>
                ))
            }
        </>
    )
};

export default Orders;