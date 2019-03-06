import React from 'react'

function Form({ handleChange, handleSubmit, nbPlayers, name1, name2 }) {
    const radios = (
        <div>
            <label className="radio-inline">
                <input
                    type="radio"
                    name="player"
                    value="1"
                    defaultChecked
                    onChange={handleChange}
                />un joueur
            </label>
            <label className="radio-inline">
                <input
                    type="radio"
                    name="player"
                    value="2"
                    onChange={handleChange}
                />deux joueurs
            </label>
            <br />
        </div>
    )

    const inputName1 = (
        <div className="form-group">
            <label htmlFor="name1">Nom du joueur 1
                <input
                    className="form-control"
                    type="text"
                    name="name1"
                    value={name1}
                    onChange={handleChange}
                />
            </label>
        </div>
    )

    const inputName2 = (
        nbPlayers === "2" &&
        <div className="form-group">
            <label htmlFor="name2">Nom du joueur 2
                <input
                    className="form-control"
                    type="text"
                    name="name2"
                    id="name2"
                    value={name2}
                    onChange={handleChange}
                />
            </label>
        </div>
    )

    const submit = (
        <button className="btn btn-large btn-default">Valider</button>
    )

    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            {radios}
            {inputName1}
            {inputName2}
            {submit}
        </form>
    )
}

export default Form
