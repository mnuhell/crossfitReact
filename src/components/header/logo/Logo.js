import React from 'react';
import { Link } from 'react-router-dom'

import airfitLogo from '../../../../src/assets/logo-login-airfit.svg';

const Logo = () => {

    return (
        <Link to="/">
            <img width="120" src={airfitLogo} alt="Croosfit App" />
        </Link>
        
    )
}

export default Logo;