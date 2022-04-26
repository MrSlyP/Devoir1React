//import React from "react";

function StarterShower(props) {
  //la liste des images (imgList)
  let imageShow = props.images;
  //Le "value" provenant du menu déroulant. Correspond
  //à l'indice (index) voulu pour l'affichage.
  let selected = props.selection;
  //La liste contenant le nom des pokemons (starterList)
  //pour d'afficher le nom du pokemon au cas où l'image ne serait pas disponible
  let listeNom = props.liste;
  //Image ici
  return (
    <div>
      <img
        src={imageShow[selected]}
        width="200"
        height="200"
        alt={listeNom[selected]}
      />
    </div>
  );
}

export default StarterShower;
