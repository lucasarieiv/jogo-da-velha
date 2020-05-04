import React from 'react';
import './About.css';

import Avatar from './objects/Avatar';
import Title from './objects/Title';
import Texts from './objects/Texts';
import SocialMedia from './objects/SocialMedia';
import Header from './components/Header';
import CollabCodeWhite from './img/logo-white.png';
import Github from './img/github-icon.png';
import In from './img/in-icon.png';
import Facebook from './img/facebook-icon.png';
import Twiter from './img/twiter-icon.png';
import Instagram from './img/instagram-icon.png';

const About = ()=> (
    <main className="about">
        <Header image={CollabCodeWhite} />
        <Avatar avatarImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
        <Title content="Giovanna Silva" />
        <Texts content="Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho na comunidade da Impulso" />
        <SocialMedia link="#" img={Github} />
        <SocialMedia link="#" img={In} />
        <SocialMedia link="#" img={Facebook} />
        <SocialMedia link="#" img={Twiter} />
        <SocialMedia link="#" img={Instagram} />
    </main>
)

export default About;