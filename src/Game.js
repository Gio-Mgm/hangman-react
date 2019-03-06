import React, { Component } from 'react'

import { words } from './datas/words'
import Keyboard from './Keyboard'
import Form from './Form'
import Word from './Word'
import Infos from './Infos'
import EndGame from './EndGame'

class Game extends Component {
    _initialState = {
        gameSet: true,
        word: "",
        usedLetters: "",
        nbPlayers: "1",
        players: {
            player1: {
                name1: "",
                score: "0"
            },
            player2: {
                name2: "",
                score: "0"
            },
        },
        activePlayer: "1",
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

    handleClick = event => {
        const { value } = event.target
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
                this.setState({ lives: updLives })
                if (updLives === 0) {
                    this.setState({
                        gameOver: true
                    })
                }
            }
        }
    }

    render() {
        const gameBoard = (
            <div>
                {
                    !this.state.gameOver ?
                    <Keyboard handleClick={this.handleClick}/> :
                    <EndGame
                        activePlayer={this.state.activePlayer}
                        gameWon={this.state.gameWon}
                        wordToFind={this.state.word}
                    />
                }
                <Word
                    wordToFind={this.state.word}
                    usedLetters={this.state.usedLetters}
                />
                { !this.state.gameOver && <Infos lives={this.state.lives}/> }
            </div>
        )
        return (
            <div>
                {this.state.gameSet ? gameBoard : <Form />}
            </div>
        )
    }
}

export default Game
