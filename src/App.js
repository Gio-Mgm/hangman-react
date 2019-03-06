import React from 'react';

import './App.css';
import Header from './Header'
import Game from './Game'

function App() {

    return (
        <div className="container-fluid">
            <Header />
            <Game />
            {/*<Form />*/}
        </div>
    )
}

export default App;
