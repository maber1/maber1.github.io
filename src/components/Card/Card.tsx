import React, {FC, useState} from "react";
import cn from "clsx";
import "./Card.scss"
import BtnToCart from "../BtnToCart/BtnToCart";
import {priceFormat} from "../helpers";
import {IProduct} from "src/types/productTypes";
import EditIcon from "../../icons/edit.svg";
import Button from "../../components/Button";
import {ProductForm} from "../../components/Forms";
import {Modal} from "../../components/Modal/Modal";

export const Card: FC<IProduct> = ({image, name, description, price}) => {
    const descCrop: string = description.slice(0, 150);
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
    const handleShowModalEdit = (): void => {
        setIsOpenEdit(true);
    }

    return (
        <>
            <div className={cn('card')}>
                <span><Button icon={<EditIcon/>} onClick={handleShowModalEdit}/></span>
                <img className={cn('card__picture')} src={image} alt=""/>
                <h3 className={cn('card__name')}>{name}</h3>
                <p className={cn('card__description')}>{descCrop}...</p>
                <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
                <BtnToCart label='в корзину' counter={0} fullWidth disabled/>
            </div>
            <Modal isOpen={isOpenEdit} onClose={setIsOpenEdit}>
                <ProductForm />
            </Modal>
        </>

    )
}