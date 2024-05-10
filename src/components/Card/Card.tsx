import React, {FC, useState} from "react";
import cn from "clsx";
import "./Card.scss"
import BtnToCart from "../BtnToCart/BtnToCart";
import {priceFormat, truncateText} from "../helpers";
import {ProductForm} from "../../components/Forms";
import {Modal} from "../../components/Modal/Modal";
import {addToCart} from "src/store/cartSlice";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {IProduct} from "src/api/types";
import Button from "src/components/Button";
import EditIcon from "../../icons/edit.svg"
import {selectIsAuth} from "src/store/userSlice";

interface ProductProps {
    product: IProduct;
}

export const Card: FC<ProductProps> = ({product}) => {
    const {photo, name, desc, price} = product;
    const dispatch = useAppDispatch();
    const isAuthenticated: boolean = useAppSelector(selectIsAuth);
    const descCrop: string = truncateText(desc, 100);
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
    const handleModalEdit = (): void => {
        setIsOpenEdit(!isOpenEdit);
    }
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    return (
        <>
            <div className={cn('card')}>
                {isAuthenticated && <span><Button style={{padding: '5px'}} icon={<EditIcon/>} onClick={handleModalEdit}/></span>}
                <div>
                    <img className={cn('card__picture')} src={photo ? photo : '/images/no_image.png'} alt=""/>
                    <h3 className={cn('card__name')}>{name}</h3>
                    <p className={cn('card__description')}>{descCrop}</p>
                </div>
                <div>
                    <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
                    <BtnToCart onClick={handleAddToCart} label='в корзину' counter={0} fullWidth/>
                </div>
            </div>
            <Modal isOpen={isOpenEdit} onClose={handleModalEdit}>
            <ProductForm product={product} onClose={handleModalEdit}/>
            </Modal>
        </>

    )
}