import React from 'react';
import { Link } from 'react-router-dom'

import airfitLogo from '../../../../src/assets/logo-login-airfit.svg';

const Logo = ( {width, altTitle} ) => {

    return (
        
        <img width={width} src={airfitLogo} alt={altTitle} /> 
    )
}

export default Logo;