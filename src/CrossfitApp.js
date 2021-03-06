import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import RoutesApp from './routes/RoutesApp';


const CrossfitApp = () => {

    return (
        <Provider store={ store }>
            <HashRouter>
                <RoutesApp />
            </HashRouter>
        </Provider>

    )
}

export default CrossfitApp;
