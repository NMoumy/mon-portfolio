import React from 'react';
import './UnProjet.scss'; 

export default function UnProjet({ id, titre, date, image, onClick, technologies}) {

  return (
    <div className="UnProjet" onClick={onClick}>
      <img src={image} alt={titre} />
      <div className="information">
        <h3>{titre}</h3>
        <div className="technologie">
          <h4>technologie utilisée</h4>
          <div className="liste-tech">
          {technologies.map((technologie, index) => (
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

