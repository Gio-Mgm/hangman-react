import React from 'react'

function Word({wordToFind, usedLetters}) {
    const word = wordToFind.split('').map((letter, index) => {
        return usedLetters.includes(letter) ? letter : "_"
    }).join('')

    return (
        <div className="actual-word">
            <p id="actualWord">{word}</p>
        </div>
    )
}

export default Word
