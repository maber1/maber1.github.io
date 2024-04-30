import React, {FC, useState} from 'react';
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import {store} from "src/store";
import {logoutUser, selectIsAuth} from "src/store/userSlice";
import {Modal} from "src/components/Modal/Modal";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {useTranslation} from "react-i18next";

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const isAuthenticated: boolean = useAppSelector(selectIsAuth);
    const dispatch = useAppDispatch();
    const [openCollapseState, setOpenCollapseState] = useState(false);
    const openModalState = () => {
        setOpenCollapseState(!openCollapseState);
    };
    const currentState = store.getState();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    }

    return (
        <header className='header'>
            <div className="header__inner">
                <Logo/>
                <Navigation/>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{marginRight: 20}}>
                        <Button label='show state' onClick={openModalState}/>
                        <Modal isOpen={openCollapseState} onClose={openModalState}>
                            <pre>
                                {JSON.stringify(currentState, null, "\t")}
                            </pre>
                        </Modal>
                    </div>
                    <div>
                        <ThemeSwitcher/>
                        <LangSwitcher/>
                    </div>
                    {!isAuthenticated ?
                        <div style={{marginLeft: 20}}>
                            <Button label={t(`components.button.login`)} onClick={handleLogout}/>
                        </div>
                        :
                        <div style={{marginLeft: 20}}>
                            <Button label={t(`components.button.logout`)} onClick={handleLogout}/>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};