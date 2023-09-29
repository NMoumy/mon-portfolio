import './Superposition.scss'; 

export default function Superposition({ onClose, description, titre, liens}) {

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
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/u5W2NWItytc?list=PLrSOXFDHBtfE5tpw0bjMevWxMWXotiSdO"
            title="HTML/CSS #1 - introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
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
