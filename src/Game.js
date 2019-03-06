import React, { Component } from 'react'

import { words } from './datas/words'
import Keyboard from './Keyboard'
import Form from './Form'
import Word from './Word'
import Infos from './Infos'
import EndGame from './EndGame'

class Game extends Component {
    _initialState = {
        gameSet: false,
        word: "",
        usedLetters: "",
        nbPlayers: "1",
        name1: "",
        name2: "",
        activePlayerIs1: true,
        lives: 10,
        gameOver: false,
        gameWon: false
    }
    state = this._initialState

    componentDidMount() {
        this.setWordToFind()
    }

    setWordToFind = () => {
        const i = Math.floor(Math.random() * words.length)
        const word = words[i]
        this.setState({
            isLoading: false,
            word: word
        })
    }

    handleChange = event => {
        const { type, name, value} = event.target
        type === "radio" ? this.setState({ nbPlayers: value }) :
            this.setState({ [name]: value })
    }

    handleSubmit = event => {
        this.setState({ gameSet: true })
        console.log(this.state.nbPlayers, this.state.name1, this.state.name2)
        event.preventDefault()
    }

    handleClick = event => {
        const { value, name } = event.target
        if (name === "replay") {
            const prevName1 = this.state.name1
            const prevName2 = this.state.name2
            this.setState(this._initialState,() => {
                    this.setState({
                        name1: prevName1,
                        name2: prevName2
                    })
            })

        } else {
            const updUsedLetters = this.state.usedLetters + value
            const updWord = this.state.word.replace(/\w/g,(letter) => {
                return (updUsedLetters.includes(letter) ? letter : '_')
            })
            event.target.classList.add("used")
            this.setState({
                usedLetters: updUsedLetters
            })
            // Verifie qu'il n'y a plus de '_'
            if (!updWord.includes('_')) {
                this.setState({
                    gameOver: true,
                    gameWon: true })
            } else {
                // si la lettre n'est pas présente où qu'elle a déjà été jouée,
                // une vie est retirée
                if (!this.state.word.includes(value) ||
                        this.state.usedLetters.includes(value)) {
                    const updLives = this.state.lives - 1
                    if (this.state.nbPlayers === "2") {
                        this.setState({activePlayerIs1: !this.state.activePlayerIs1})
                    }
                    this.setState({ lives: updLives })
                    if (updLives === 0) {
                        this.setState({
                            gameOver: true
                        })
                    }
                }
            }
        }
    }

    render() {
        const heading = (
            <h2>
                {this.state.activePlayerIs1 ?
                this.state.name1 :
                this.state.name2 }, à vous de jouer
            </h2>
        )
        const gameBoard = (
            <div>
                {!this.state.gameOver && heading}
                {
                    !this.state.gameOver ?
                    <Keyboard handleClick={this.handleClick}/> :
                    <EndGame
                        activePlayer={this.state.activePlayerIs1 ?
                            this.state.name1 :
                            this.state.name2}
                        gameWon={this.state.gameWon}
                        wordToFind={this.state.word}
                        handleClick={this.handleClick}
                    />
                }
                <Word
                    wordToFind={this.state.word}
                    usedLetters={this.state.usedLetters}
                />
                { !this.state.gameOver && <Infos lives={this.state.lives}/> }
            </div>
        )

        const form = (
            <Form
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                nbPlayers={this.state.nbPlayers}
                name1={this.state.name1}
                name2={this.state.name2}
            />
        )

        return (
            <div>
                { this.state.gameSet ? gameBoard : form }
            </div>
        )
    }
}

export default Game
