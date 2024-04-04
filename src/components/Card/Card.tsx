import React, {FC} from "react";
import cn from "clsx";
import "./Card.scss"
import BtnToCart from "../BtnToCart/BtnToCart";
import {priceFormat} from "../helpers";
import {IProduct} from "src/types/productTypes";

export const Card: FC<IProduct> = ({image, name, description, price}) => {
    const descCrop: string = description.slice(0, 150);

    return (
        <div className={cn('card')}>
            <img className={cn('card__picture')} src={image} alt=""/>
            <h3 className={cn('card__name')}>{name}</h3>
            <p className={cn('card__description')}>{descCrop}...</p>
            <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
            <BtnToCart label='в корзину' counter={0} fullWidth disabled/>
        </div>
    )
}