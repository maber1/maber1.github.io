import React, {FC, useEffect, useState} from "react";
import cn from "clsx";
import "./Card.scss"
import BtnToCart from "../BtnToCart/BtnToCart";
import {priceFormat, truncateText} from "../helpers";
import {IProduct} from "src/types/productTypes";
import EditIcon from "../../icons/edit.svg";
import Button from "../../components/Button";
import {ProductForm} from "../../components/Forms";
import {Modal} from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {StoreDispatch} from "src/store";
import {addToCart} from "src/store/cartSlice";
import {selectIsAdmin} from "src/store/userSlice";

interface ProductProps {
    product: IProduct;
}

export const Card: FC<ProductProps> = ({product}) => {
    const {image, name, description, price} = product;
    const dispatch: StoreDispatch = useDispatch();
    const isAdmin = useSelector(selectIsAdmin);
    const descCrop: string = truncateText(description, 100);
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
    const handleModalEdit = (): void => {
        setIsOpenEdit(!isOpenEdit);
    }
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }

    useEffect(() => {

    }, [product]);

    return (
        <>
            <div className={cn('card')}>
                {isAdmin && <span><Button icon={<EditIcon/>} onClick={handleModalEdit}/></span>}
                <img className={cn('card__picture')} src={image} alt=""/>
                <h3 className={cn('card__name')}>{name}</h3>
                <p className={cn('card__description')}>{descCrop}</p>
                <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
                <BtnToCart onClick={handleAddToCart} label='в корзину' counter={0} fullWidth/>
            </div>
            <Modal isOpen={isOpenEdit} onClose={handleModalEdit}>
                <ProductForm product={product} onClose={handleModalEdit}/>
            </Modal>
        </>

    )
}