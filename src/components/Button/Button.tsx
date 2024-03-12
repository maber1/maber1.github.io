import React, {FC} from 'react';
import './Button.scss';
import cn from "clsx";
import {IButtonProps} from "../../types/buttonTypes";

const Button: FC<IButtonProps> = (
    {
        label,
        icon,
        fullWidth,
        lineCenter,
        ...props
    }) => {
    return (
        <button
            type='button'
            {...props}
            className={
                cn('button',
                    fullWidth && 'button__w100',
                    lineCenter && 'button__center',
                    !label && icon && 'button__icon',
                    props.className,
                )}
        >{icon}{label}</button>
    );
};

export default Button;