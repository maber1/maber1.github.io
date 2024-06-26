import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "src/pages/Home";
import Profile from "src/pages/Profile";
import Cart from "src/pages/Cart";
import Products from "src/pages/Products";
import Login from "src/pages/Login";
import NotFound from "src/pages/NotFound";
import {selectToken} from "src/store/userSlice";
import {useAppSelector} from "src/hooks";
import Orders from "src/pages/Orders";

export const AuthRequired = ({children}: { children: JSX.Element }) => {
    const location = useLocation();
    const token = useAppSelector(selectToken);
    return token ? children : <Navigate to='/login' state={{from: location}} replace/>;
};

export const RoutesProvider = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<AuthRequired><Profile/></AuthRequired>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products" element={<Products/>}>
            <Route path=':id' element={<Products/>}/>
        </Route>
        <Route path="/orders" element={<AuthRequired><Orders/></AuthRequired>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);
