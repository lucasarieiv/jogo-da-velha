import React from 'react';

const SocialMedia = ({link, img})=> (
    <a className="social-media" href={link}>
        <img src={img} alt=""/>
    </a>
);

export default SocialMedia;