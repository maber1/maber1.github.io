import React from 'react';
import {CartItem} from "src/components/Cart/CartItem/CartItem";
import {selectCartProducts} from "src/store/cartSlice";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {IOrderStatus, IProduct} from "src/api/types";
import {priceFormat} from "src/components/helpers";
import Button from "src/components/Button";
import {addOrder} from "src/store/ordersSlice";
import {selectIsAuth} from "src/store/userSlice";

const Cart = () => {
    const dispatch = useAppDispatch();
    const {products} = useAppSelector(selectCartProducts);
    const isAuthenticated: boolean = useAppSelector(selectIsAuth);
    const {totalPrice, totalQuantity} = (() => {
        const {totalPrice, totalQuantity} = products.reduce((acc, product) => {
            const quantity = Number(product.quantity) || 1;
            return {
                totalPrice: acc.totalPrice + product.price * quantity,
                totalQuantity: acc.totalQuantity + quantity
            };
        }, {totalPrice: 0, totalQuantity: 0});

        return {totalPrice, totalQuantity};
    })();

    const handleCreateOrder = () => {
        const orderData = {
            products: products.map(product => ({
                id: product.id,
                quantity: product.quantity
            })),
            status: IOrderStatus.PendingConfirmation,

        }
        dispatch(addOrder(orderData))
    }

    return (
        <>
            <h1 style={{fontSize: '22px', fontWeight: 'bold'}}>Товары в вашей корзине</h1>
            <div style={{height: '100%'}}>
                {
                    products.map((item: IProduct) => (
                        <CartItem key={item.id} product={item}/>
                    ))
                }
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px 10px'}}>
                <div>
                    Общее количество позиций <b>{totalQuantity}</b> шт. <br/>
                    Общая стоимость <b>{priceFormat(totalPrice)}</b> руб.
                </div>
                {isAuthenticated && totalQuantity &&
                <div>
                    <Button label='Оформить заказ' onClick={handleCreateOrder}/>
                </div>
                }
            </div>
        </>
    )
};

export default Cart;