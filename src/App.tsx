import React from 'react';
import Layout from "src/components/Layout/Layout";
import {ModalRoute} from "src/components/Modal/ModalRoute";
import {RoutesProvider} from "src/providers/RoutesProvider";


const App = () => {
    return (
        <Layout>
            <ModalRoute />
            <RoutesProvider />
        </Layout>
    );
}

export default App;
