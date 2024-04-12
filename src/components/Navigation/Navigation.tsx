import React, {FC} from 'react';
import {NavLink, NavLinkProps} from "react-router-dom";
import "./Navigation.scss";

export const Navigation: FC = () => {

    return (
        <div className='menu'>
            <NavLink to={'/'} >Главная</NavLink>
            <NavLink to={'/profile'} >Профиль</NavLink>
            <NavLink to={'/cart'} >Корзина</NavLink>
            <NavLink to={'/products'} >Товары</NavLink>
        </div>
    );
}