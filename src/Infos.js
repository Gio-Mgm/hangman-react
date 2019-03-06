import React from 'react'

function Infos({ lives }) {
    const heart = '\u2764 '
    const hearts = heart.repeat(lives)

    return (
        <div className="lives">
            {lives !== 0 && <h2>Vies restantes : {hearts}</h2>}
        </div>
    )
}

export default Infos
