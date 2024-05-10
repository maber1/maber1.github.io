import React, {FC} from 'react';
import cn from "clsx";
import "./Product.scss"
import BtnToCart from "../BtnToCart/BtnToCart";
import {priceFormat} from "../helpers";
import {IProduct} from "src/api/types";

export const Product:FC<IProduct> = ({photo, name, desc, price}) => {

    return (
        <div className={cn('product')}>
            <div className="product__pictures">
                <img className={cn('product__cover')} src={photo} alt=""/>
            </div>
            <div className="product__info">
                <h3 className={cn('product__name')}>{name}</h3>
                <p className={cn('product__description')}>{desc}</p>
                <div className={cn('product__price')}>цена: {priceFormat(price)} ₽</div>
                <BtnToCart label='в корзину' counter={0} disabled />
            </div>
        </div>
    );
}