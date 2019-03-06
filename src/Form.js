import React from 'react'

function Form() {
    return (
        <form className="form-horizontal">
            <label htmlFor="one" className="radio-inline">
                <input
                    type="radio"
                    name="player"
                    id="one"
                    value="1"
                    checked
                />un joueur
            </label>
            <label htmlFor="two" className="radio-inline">
                <input
                    type="radio"
                    name="player"
                    id="two"
                    value="2"
                />deux joueurs
            </label>
            <br />
            <div className="form-group">
                <label htmlFor="name1">Nom du joueur 1
                    <input
                        className="form-control"
                        type="text"
                        name="name1"
                        value=""
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="name2">Nom du joueur 2
                    <input
                        className="form-control"
                        type="text"
                        name="name2"
                        id="name2"
                        value=""
                    />
                </label>
            </div>
            <label htmlFor="round">Choisissez le nombre de manches gagnantes
                <select className="" name="round" id="round">
                    <option>1</option>
                    <option>3</option>
                    <option>5</option>
                </select>
            </label>
        </form>
    )
}

export default Form
