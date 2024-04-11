import React, {FC} from 'react';
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import IconLogout from "../../icons/logout.svg"

export const Header:FC = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        navigate('/login')
    }

    return (
        <header className='header'>
            <div className="header__inner">
                <Logo />
                <Navigation />
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <ThemeSwitcher/>
                        <LangSwitcher/>
                    </div>
                    <div style={{marginLeft: 20,display: 'flex', alignItems: 'center'}}>
                        <Button icon={<IconLogout />} onClick={handleLogout}/>
                    </div>
                </div>
            </div>
        </header>
    );
};