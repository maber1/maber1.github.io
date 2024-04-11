import React, {FC} from "react";
import cn from "clsx";
import './Layout.scss';
import {Header} from "../Header/Header";

interface ILayout {
    children: React.ReactNode
}

const Layout:FC<ILayout> = ({children}) => {

    return (
        <div className={cn('layout')}>
            <Header/>

            <main className="layout__content">
                {children}
            </main>
        </div>
    )
}

export default Layout;