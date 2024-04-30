import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

export const Navigation: FC = () => {

    return (
        <div className='menu'>
            <NavLink to={'/'} >Главная</NavLink>
            <NavLink to={'/cart'} >Корзина</NavLink>
            <NavLink to={'/products'} >Товары</NavLink>
            <NavLink to={'/profile'} >Профиль</NavLink>
            <NavLink to={'/orders'} >Заказы</NavLink>
        </div>
    );
}