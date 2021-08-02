import React from 'react';
import { logo } from '../../assets/index';
import classes from './Header.module.css';

const { logoContainer } = classes;

const Header = (props) => {
    return (
             <img className={logoContainer} src={logo} alt="space X logo" />
     );
};

export default Header;