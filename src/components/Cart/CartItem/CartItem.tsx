import React, {FC} from "react";
import cn from "clsx";
import "./CartItem.scss"
import {priceFormat, truncateText} from "../../helpers";
import Button from "src/components/Button";
import IconDelCart from "src/icons/icon__delcart.svg";
import {removeFromCart} from "src/store/cartSlice";
import {useAppDispatch} from "src/hooks";
import {IProduct} from "src/api/types";

export interface IQuantity {
    quantity?: number | string
}
export interface ICartProductProps {
    product: IProduct & IQuantity;
}

export const CartItem: FC<ICartProductProps> = ({product}) => {
    const {id, photo, name, desc, price, quantity} = product;
    const descCrop = truncateText(desc, 400);
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    }


    return (
        <div className={cn('cart__item')}>
            <img className={cn('cart__item-picture')} src={photo ? photo : '/images/no_image.png'} alt=""/>
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