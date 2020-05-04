import React from 'react';
import Logo from '../../objects/Logo';
import Sobre from '../../objects/Sobre';
import Close from '../../objects/Close';
import './styles.css';

const Header = ({image}) => (
    <header className="header">
        <Logo src={image}/>
        <Sobre />
        <Close />
    </header>
)

export default Header;