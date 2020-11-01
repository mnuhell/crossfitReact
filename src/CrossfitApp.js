import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import '../src/assets/scss/styles.scss';
import RoutesApp from './routes/RoutesApp';


const CrossfitApp = () => {

    return (
            <Router>
                <RoutesApp />
            </Router>
            
    )
}

export default CrossfitApp;