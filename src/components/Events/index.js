import React from 'react';
import './styles.css'
import Text from '../../objects/Text';
import InputBox from '../../objects/InputBox';

const Events = () => (
    <div className="events">
        <InputBox />
        <Text content="Mostrar eventos"/>
    </div>
)

export default Events;