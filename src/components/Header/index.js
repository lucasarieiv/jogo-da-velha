import React from 'react';
import './style.css'
import Logo from '../../objects/Logo';
import Sobre from '../../objects/Sobre';
import Menu from '../../objects/Menu';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Sobre />
            <Menu />
        </div>
    )
}

export default Header;