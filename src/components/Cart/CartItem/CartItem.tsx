import React, {FC} from "react";
import cn from "clsx";
import "./CartItem.scss"
import {BtnDelCart} from "../BtnDelCart/BtnDelCart";
import {priceFormat} from "../../helpers";
import {IProduct} from "src/types/productTypes";

export const CartItem:FC<IProduct> = ({image, name, description, price}) => {
    const descCrop = description.slice(0, 300);

    return (
        <div className={cn('cart__item')}>
            <img className={cn('cart__item-picture')} src={image} alt=""/>
            <div className={cn('cart__item-info')}>
                <h3 className={cn('cart__item-name')}>{name}</h3>
                <p className={cn('cart__item-description')}>{descCrop}...</p>
            </div>
            <div className={cn('cart__item-price')}>{priceFormat(price)} ₽</div>
            <div className="cart__item-control">
                <BtnDelCart />
            </div>
        </div>
    )
}