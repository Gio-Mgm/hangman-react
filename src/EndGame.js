import React from 'react'

function EndGame({ activePlayer, gameWon, wordToFind }) {
    const won = `Bravo ! ${activePlayer} a remporté la partie !`
    const lost = `Dommage ! ${activePlayer} a fini pendu !`
    const answer = <h2>La réponse était : {wordToFind}</h2>
    return (
        <div>
            <h2>{gameWon ? won : lost}</h2>
            {!gameWon && answer}
        </div>
    )
}

export default EndGame
