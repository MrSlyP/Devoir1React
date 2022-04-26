import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StarterSelector from "./StarterSelector";
import StarterShower from "./StarterShower";

const starterList = ["Bulbasaur", "Charmander", "Squirtle"];
const imgList = ["bulbasaur.png", "charmander.png", "squirtle.png"];

function App() {
  // Ajoutez la gestion du state ici

  //State qui gère le pokemon choisi dans le menu
  //déroulant. Correspond à un index

  const [index, setIndex] = useState(0);

  //Fonction pour modifier le state qui gère le pokemon
  //choisi dans le menu déroulant
  function handleIndexPokemon(e) {
    setIndex(e.target.value);
  }

  // Vous devez ajouter des props aux components
  return (
    <div className="App">
      <header className="App-header">
        <p>
            <StarterSelector
            liste={starterList}
            selection={index}
            changeState={handleIndexPokemon}
          />
        </p>
        <StarterShower 
        liste={starterList} 
        images={imgList} 
        selection={index} />
      </header>
    </div>
  );
}

export default App;
