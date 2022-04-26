//import React from "react";

function StarterSelector(props) {
  //La liste contenant le nom des pokemons (starterList)
  let liste = props.liste;
  //Le "value" provenant du menu déroulant. Correspond
  //à l'indice (index) voulu pour l'affichage.
  let pokemonSelected = props.selection;
  //La fonction handleIndexPokemon qui permet de modifier
  //le state dans App.js
  let modifIndex = props.changeState;

  return (
    
      <div>Pick your favourite Pokemon :{" "}
      <select
        defaultvalue={liste[{ pokemonSelected }]}
        onChange={(e) => {
          modifIndex(e);
        }}
      >
        <option value="0">{liste[0]}</option>
        <option value="1">{liste[1]}</option>
        <option value="2">{liste[2]}</option>
      </select></div>
    
  );
}

export default StarterSelector;
