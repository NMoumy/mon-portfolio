import React from 'react';
import './UnProjet.scss'; 
import imageLvdr from '../image/Lvdr.png';
import imageMundi from '../image/Mundiquiz.png';
import imageObjet from '../image/Objet.png';
import imageVoiture from '../image/Voiture.jpg';
import imageMemo from '../image/Memo.png';
import image4w4 from '../image/4w4.png';

export default function UnProjet({ id, titre, date, onClick, technologies, titreImg }) {

  // Associez chaque titre à son image
  const imagesParTitre = {
    'Lvdr' : imageLvdr,
    'Mundiquiz': imageMundi,
    'Objet': imageObjet,
    'Voiture': imageVoiture,
    'Memo': imageMemo,
    '4w4': image4w4,
  };

  // Utilisez le titre pour obtenir l'image correspondante
  const image = imagesParTitre[titreImg] || null;

  return (
    <div className="UnProjet" onClick={onClick}>
      <img src={image} alt={titre} />
      <div className="information">
        <h3>{titre}</h3>
        <div className="technologie">
          <h4>technologie utilisée</h4>
          <div className="liste-tech">
            {technologies && technologies.map((technologie, index) => (
              <div key={index}>{technologie}</div>
            ))}
          </div>
        </div>
        <div className="date">
          <h4>date</h4>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
