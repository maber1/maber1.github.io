import React, {useEffect} from 'react';
import Layout from "src/components/Layout/Layout";
import {ModalRoute} from "src/components/Modal/ModalRoute";
import {RoutesProvider} from "src/providers/RoutesProvider";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAppInit, setAppInitialized} from "src/store/appSlice";
import {StoreDispatch} from "src/store";
import {logoutUser, selectToken} from "src/store/userSlice";

const App = () => {
    const dispatch: StoreDispatch = useDispatch();
    const token = useSelector(selectToken)

    useEffect(() => {
        if (!token) {
            dispatch(logoutUser());
        }
    }, [dispatch, token]);

    useEffect(() => {
        dispatch(setAppInitialized());
    }, []);
    const appInitialized = useSelector(selectIsAppInit);

    return (
        appInitialized ? (
            <Layout>
                <ModalRoute/>
                <RoutesProvider/>
            </Layout>
        ) : (
            <div>Loading...</div>
        )
    );
}

export default App;
