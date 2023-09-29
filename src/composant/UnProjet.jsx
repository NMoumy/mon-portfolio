import React from 'react';
import './UnProjet.scss'; 

export default function UnProjet() {
  return (
    <div className="UnProjet">
      <img src="/images/exemple.jpg" alt="Projet 1" />
      <div className="information">
        <h3>Memo</h3>
        <div className="technologie">
          <h4>technologie utilisée</h4>
          <div className="liste-tech">
            <div>REACT</div> <div>JavaScript</div>
          </div>
        </div>
        <div className="date">
          <h4>date</h4>
          <p>2023/06/15</p>
        </div>
      </div>
    </div>
  );
}
