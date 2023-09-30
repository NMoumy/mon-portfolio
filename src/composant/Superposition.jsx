import React from 'react';
import './Superposition.scss';
import YouTube from 'react-youtube';

export default function Superposition({ onClose, projet }) {
  const fermerSuperposition = () => {
    // Activer le défilement de la page
    document.body.style.overflow = 'auto';

    // Appeler la fonction onClose pour fermer la superposition
    onClose();
  };

  return (
    <div className="Superposition">
      <div className="desc-projet">
        <button className="btn-quitter" onClick={fermerSuperposition}>
          X
        </button>
        <h2>{projet.titre}</h2>
        <div className="media-projet">
          <YouTube videoId={projet.videolien} />
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{projet.description}</p>
        </div>
        <div className="lien">
          <div className="liste-lien">
            {/* Vous pouvez également afficher d'autres informations du projet ici */}
            {/* <button>111</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
