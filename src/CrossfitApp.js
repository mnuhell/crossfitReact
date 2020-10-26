import React from 'react';
import Header from '../src/components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';


const CrossfitApp = () => {

    return (
            <Router>
                <Header />
            </Router>
            
    )
}

export default CrossfitApp;