import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StarterSelector from "./StarterSelector";
import StarterShower from "./StarterShower";

const starterList = ['Bulbasaur', 'Charmander', 'Squirtle']
const imgList = ['bulbasaur.png', 'charmander.png', 'squirtle.png']

function App() {
    // Ajoutez la gestion du state ici
    // Vous devez ajouter des props aux components
    return (
        <div className="App">
            <header className="App-header">
                <StarterSelector/>
                <StarterShower/>
            </header>
        </div>
    );
}

export default App;
