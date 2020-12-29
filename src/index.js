import React from 'react';
import ReactDOM from 'react-dom';
import CrossfitApp from './CrossfitApp';
import './index.css';
import './tailwind.output.css';
import moment from "moment";

moment().locale('es');

ReactDOM.render(
    <CrossfitApp  />,
  document.getElementById('root')
);
