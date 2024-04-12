import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "src/pages/Home";
import Profile from "src/pages/Profile";
import Cart from "src/pages/Cart";
import Products from "src/pages/Products";
import Login from "src/pages/Login";
import NotFound from "src/pages/NotFound";

/*

Необходимо создать

экран профиля. Содержит форму профиля
+экран товаров/операций. Содержит компонент списка товаров и операций
+модальное окно редактирования/создания товара/операции
+экран корзины (для тех, кто делает интернет-магазин). Здесь использовать компонент списка товаров для корзины
+навигацию по экранам в хедере
Защищенный роутинг для соответствующих экранов мы пройдем в последующих уроках

*/
const objStore = {
    user: {
        access_token: '11'
    }
}

export const AuthRequired = ({children}: { children: JSX.Element }) => {
    const location = useLocation();
    const {user} = objStore;
    console.log(user.access_token)
    return user.access_token ? children : <Navigate to='/login' state={{from: location}} replace/>;
};

export const RoutesProvider = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<AuthRequired><Profile/></AuthRequired>}/>
        <Route path="/cart" element={<AuthRequired><Cart/></AuthRequired>}/>
        <Route path="/products" element={<Products/>}>
            <Route path=':id' element={<Products/>}/>
        </Route>
        {/*<Route path={'?someModalId'} />*/}
        {/*<Route path="/modal" element={<Outlet />}>*/}
        {/*<Route path='/modal/auth' element={<ModalRoute><AuthForm/></ModalRoute>}/>*/}
        {/*    <Route path='reg' element={<ModalRoute><RegisterForm /></ModalRoute>} />*/}
        {/*</Route>*/}
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
);

/*export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        useAdminLayout: true
    },
    {
        path: 'profile',
        element: <Profile/>,
    },
    {
        path: '/cart',
        element: <Cart />,
    },
    {
        path: '/products',
        element: <Products />,
        children: [
            {
                path: ':id',
                element: <Products />,
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <NotFound/>
    },
]);*/

/*export const routes: Route[] = [
    {
        path: '/',
        element: <Home />,
        title: 'Главная',
        isPublic: false,
    },
    {
        path: '/login',
        element: <AuthForm />,
        isPublic: true,
    },
    {
        path: '/profile',
        element: <Profile />,
        title: 'Профиль',
        // isPublic: false,
    },
    {
        path: '/cart',
        element: <Cart />,
        title: 'Корзина',
        isPublic: false,
    },
    {
        path: '/products',
        element: <Products />,
        title: 'Товары',
        children: [
            {
                path: '/products/:id',
                element: <Products />,
                title: 'Товар',
                isPublic: false,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
];*/

