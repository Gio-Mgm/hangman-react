import React from 'react'

function Word({wordToFind, usedLetters}) {
    const phrase = wordToFind.split('').map((letter, index) => {
        return (
            <span key={index}>
                {!letter.match(/[a-zA-Z]/) ||
                    usedLetters.includes(letter) ? letter : "_"}&nbsp;
            </span>
        )
    })
    return (
        <div className="actualWord">{phrase}</div>
    )
}

export default Word
