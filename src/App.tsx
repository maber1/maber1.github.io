import React, {useEffect} from 'react';
import Layout from "src/components/Layout/Layout";
import {ModalRoute} from "src/components/Modal/ModalRoute";
import {RoutesProvider} from "src/providers/RoutesProvider";
import {selectIsAppInit, setAppInitialized} from "src/store/appSlice";
import {logoutUser, selectToken} from "src/store/userSlice";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {fetchProducts} from "src/store/productsSlice";
import {Notification} from "src/components/Notification";

const App = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectToken);
    const appInitialized = useAppSelector(selectIsAppInit);

    useEffect(() => {
        if (!token) {
            dispatch(logoutUser());
        }
    }, [dispatch, token]);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(setAppInitialized());
    }, []);

    return (
        appInitialized ? (
            <Layout>
                <Notification />
                <ModalRoute/>
                <RoutesProvider/>
            </Layout>
        ) : (
            <div>Loading...</div>
        )
    );
}

export default App;
