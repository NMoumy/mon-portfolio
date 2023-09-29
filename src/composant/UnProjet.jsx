import React from 'react';
import './UnProjet.scss'; 

export default function UnProjet(props) {
  const { onClick } = props;

  return (
    <div className="UnProjet" onClick={onClick}>
      <img src="https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Projet 1" />
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
