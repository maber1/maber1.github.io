import React from 'react';
import {AuthForm} from "src/components/Forms";

const Login = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: 'calc(100vh - 200px)'}}>
            <AuthForm />
        </div>
    );
};

export default Login;