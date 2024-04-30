import React, {FC, useState} from 'react';
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button";
import IconLogout from "../../icons/logout.svg"
import {useDispatch, useSelector} from "react-redux";
import {store, StoreDispatch} from "src/store";
import {logoutUser, selectIsAdmin, selectIsAuth, setAdmin} from "src/store/userSlice";
import {Modal} from "src/components/Modal/Modal";

export const Header: FC = () => {
    const navigate = useNavigate()
    const isAuthenticated: boolean = useSelector(selectIsAuth);
    const dispatch: StoreDispatch = useDispatch();
    const isAdmin = useSelector(selectIsAdmin);
    const [openCollapseState, setOpenCollapseState] = useState(false);
    const openModalState = () => {
        setOpenCollapseState(!openCollapseState);
    };
    const currentState = store.getState();
    const handleSetAdmin = () => {
        dispatch(setAdmin());
    }
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
                    {isAuthenticated &&
                        <div style={{marginLeft: 20}}>
                            <Button label={!isAdmin ? 'set admin' : 'del admin'} onClick={handleSetAdmin}/>
                            <Button icon={<IconLogout/>} onClick={handleLogout}/>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};