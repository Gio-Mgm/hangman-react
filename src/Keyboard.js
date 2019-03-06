import React from 'react'

function Keyboard({handleClick}) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const keys = letters.map(letter => {
        return (
            <button
                className="key"
                key={letter}
                value={letter}
                onClick={handleClick}
            >
                {letter}
            </button>
        )
    })
    return (
        <div className="keyboard">
            {keys}
        </div>
    )
}

export default Keyboard
