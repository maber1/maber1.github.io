import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {ThemeProvider} from "./providers/ThemeProvider";
import {LangProvider} from "./providers/LangProvider";
import {BrowserRouter, RouterProvider} from "react-router-dom";
// import {routes} from "src/routes";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LangProvider/>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
