import React from 'react';

import './styles.css';

const Avatar = ({avatarImage})=> (
    <div className="avatar">
        <img className="image" src={avatarImage} alt=""/>
    </div>
)

export default Avatar;