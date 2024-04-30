import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {ThemeProvider} from "./providers/ThemeProvider";
import {LangProvider} from "./providers/LangProvider";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "src/store";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <BrowserRouter>
                <LangProvider/>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
