import React, { useState } from 'react';
import './styles.css';
import Card from '../../objects/Card';
import Player from '../../objects/Player';

const Hashtag = () => {
    const [turn, setTurn] = useState('x');

    let winnerMap = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        
        [0,3,6],
        [1,4,7],
        [2,5,8],
        
        [0,4,8],
        [2,4,6]
    ]

    const [hashGame, setHashGame] = useState(
        [
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
    
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
    
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
            {play: '', playIndex: 0},
        ]
    )

    function verifyWinner() {
        console.log('Entoru aqui novamente');
        for (let winnerSequence of winnerMap) {
            let countX = 0;
            let countO = 0;
            winnerSequence.forEach(position => {
                if (hashGame[position].play === 'x') {
                    countX += 1;
                } else if (hashGame[position].play === 'o') {
                    countO += 1;
                }
            })
            if (countX === 3) {
                console.log('X vencedor')
                break;
            } else if (countO === 3) {
                console.log('O Vencedor')
                break;
            }

        }
    }

    function getMove() {
        let totalMoves = hashGame.filter(hash => hash.play !== '').length;

        return totalMoves;
    }

    function verifyMovimentCount() {
        const totalMoves = getMove()
        if (totalMoves >= 5) {
            verifyWinner()
        }
    }

    const handlePlay = ({target}, index) => {
        const moveIsEmpty = hashGame[index].play;

        if (moveIsEmpty) return;
        
        setHashGame((old) => {
            old[index].play = turn;
            old[index].playIndex = index;
            return old;
        })

        if (turn === 'x') {
            setTurn('o')
        } else {
            setTurn('x')
        }
    }

    verifyMovimentCount()


    return (
        <Card>
            <ul className="hashtag">
                {hashGame.map(({play}, index) => 
                    <li key={index} className="item" onClick={(e) => handlePlay(e, index)}><Player player={play} /></li>
                )}
            </ul>
        </Card>
    )
}

export default Hashtag;