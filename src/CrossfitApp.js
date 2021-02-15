import React from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';

import RoutesApp from './routes/RoutesApp';


const CrossfitApp = () => {

    return (
        <Provider store={ store }>
            <RoutesApp />
        </Provider>

    )
}

export default CrossfitApp;
