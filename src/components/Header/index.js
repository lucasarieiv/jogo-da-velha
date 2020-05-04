import React from 'react';
import Logo from '../../objects/Logo';
import Sobre from '../../objects/Sobre';
import Menu from '../../objects/Menu';
import './styles.css';

const Header = ({image}) => (
    <header className="header">
        <Logo src={image}/>
        <Sobre />
        <Menu />
    </header>
)

export default Header;