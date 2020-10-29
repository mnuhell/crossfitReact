import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store'
import CrossfitApp from './CrossfitApp';
import './tailwind.output.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <CrossfitApp  />
    </Provider>,
  document.getElementById('root')
);
