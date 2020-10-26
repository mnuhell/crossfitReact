import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/store'
import CrossfitApp from './CrossfitApp';

import './tailwind.output.css';

ReactDOM.render(
  <Provider store={store}>
    <CrossfitApp />
    </Provider>,
  document.getElementById('root')
);
