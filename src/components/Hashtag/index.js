import React, { useState } from 'react';
import './styles.css';
import Card from '../../objects/Card';
import Player from '../../objects/Player';

const Hashtag = () => {
    const [turn, setTurn] = useState('x');
    const [hashGame, setHashGame] = useState(
        [
            {play: ''},
            {play: ''},
            {play: ''},
    
            {play: ''},
            {play: ''},
            {play: ''},
    
            {play: ''},
            {play: ''},
            {play: ''},
        ]
    )

    function handlePlay(index) {
        if (turn === 'x') {
            setHashGame((old) => {
                old[index].play = turn;
                return old;
            })
            setTurn('o')
        } else {
            setHashGame((old) => {
                old[index].play = turn;
                return old;
            })
            setTurn('x')
        }
    }

    return (
        <Card>
            <ul className="hashtag">
                {hashGame.map(({play}, index) => 
                    <li key={index} className="item" onClick={() => handlePlay(index)}><Player player={play} /></li>
                )}
            </ul>
        </Card>
    )
}

export default Hashtag;