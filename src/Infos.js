import React from 'react'

function Infos({ lives }) {
    const HEART_SYMBOL = '\u2764 '
    const hearts = HEART_SYMBOL.repeat(lives)

    return (
        <div className="lives">
            <h2>Vies restantes : {hearts}</h2>
        </div>
    )
}

export default Infos
