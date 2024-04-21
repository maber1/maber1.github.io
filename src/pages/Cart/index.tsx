import React from 'react';
import {CartItem} from "src/components/Cart/CartItem/CartItem";
import {useSelector} from "react-redux";
import {selectCartProducts} from "src/store/cartSlice";
import {IProduct} from "src/types/productTypes";

const Cart = () => {
    const products = useSelector(selectCartProducts);

    return (
        products.map((item: IProduct) => (
            <CartItem key={item.id} product={item}/>
        ))
    )
};

export default Cart;