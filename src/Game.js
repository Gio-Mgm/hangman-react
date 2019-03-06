import React, { Component } from 'react'

import { words } from './datas/words'
import Keyboard from './Keyboard'
import Form from './Form'
import Word from './Word'

class Game extends Component {
    constructor() {
        super()
        this.state = {
            isGameSet: true,
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
            roundOver: false,
            isRoundWon: false,
            gameOver: false
        }
    }
    componentDidMount() {
        this.setWordToFind()
    }

    setWordToFind() {
        const i = Math.floor(Math.random() * words.length)
        const word = words[i]
        this.setState({
            isLoading: false,
            word: word
        })
    }

    render() {
        const gameBoard = (
            <div>
                <Keyboard />
                <Word wordToFind={this.state.word} usedLetters={this.state.usedLetters}/>
                <h1 style={{fontFamily: "Arial"}}>
                    {this.state.word}
                </h1>
            </div>
        )
        return (
            <div>
                {this.state.isGameSet ? gameBoard : <Form />}
            </div>
        )
    }
}

export default Game
