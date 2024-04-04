import React, {FC} from "react";
import IconToCart from "./icon_addcart.svg";
import Button from "../Button";
import {IButtonProps} from "src/types/buttonTypes";
import "./BtnToCart.scss";

interface IBtnToCart extends IButtonProps {
    counter: number,
}

const BtnToCart: FC<IBtnToCart> = ({counter, ...props}) => {

    return (
            counter === 0 ? (
                <Button icon={<IconToCart/>} {...props} />
            ) : (
                <div className='container__btn-counter'>
                    <Button label='-' className='button__action-minus'/>
                    <div className='input__wrap'>
                        <input type='text' className='input input__to-cart' />
                    </div>
                    <Button label='+' className='button__action-plus'/>
                </div>
            )
    );
};

export default BtnToCart;