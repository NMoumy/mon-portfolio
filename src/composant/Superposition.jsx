import './Superposition.scss'; 
import YouTube from 'react-youtube';

export default function Superposition({ onClose, description, titre, videolien}) {

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
        <h2>{titre}</h2>
        <div className="media-projet">
        <YouTube videoId={videolien} />
        </div>
        <div className="description">
          <h3>description</h3>
          <p>{description}</p>
        </div>
        <div className="lien">
          <div className="liste-lien">
          </div>
        </div>
      </div>
    </div>
  );
}
