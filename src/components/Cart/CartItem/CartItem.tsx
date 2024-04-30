import React, {FC} from "react";
import cn from "clsx";
import "./CartItem.scss"
import {priceFormat, truncateText} from "../../helpers";
import {IProduct} from "src/types/productTypes";
import Button from "src/components/Button";
import IconDelCart from "src/icons/icon__delcart.svg";
import {useDispatch} from "react-redux";
import {removeFromCart} from "src/store/cartSlice";

interface IQuantity {
    quantity?: number | string
}
interface ProductProps {
    product: IProduct & IQuantity;
}

export const CartItem: FC<ProductProps> = ({product}) => {
    const {id, image, name, description, price, quantity} = product;
    const descCrop = truncateText(description, 400);
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(Number(id)));
    }


    return (
        <div className={cn('cart__item')}>
            <img className={cn('cart__item-picture')} src={image} alt=""/>
            <div className={cn('cart__item-info')}>
                <h3 className={cn('cart__item-name')}>{name}</h3>
                <p className={cn('cart__item-description')}>{descCrop}</p>
            </div>
            <div className={cn('cart__item-price')}
                 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>{priceFormat(Number(quantity) * Number(price))} ₽</div>
                <div>{quantity} шт.</div>
            </div>
            <div className="cart__item-control">
                <Button
                    title='Удалить с корзины'
                    style={{padding: '5px'}}
                    icon={<IconDelCart/>} onClick={handleRemoveFromCart}
                />
            </div>
        </div>
    )
}