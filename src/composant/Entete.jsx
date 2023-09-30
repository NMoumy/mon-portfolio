import React from 'react';
import './Entete.scss'; // Assurez-vous que le chemin d'accès au fichier CSS est correct
import vague from '../svg/vague.svg'; // Assurez-vous que le chemin d'accès au fichier CSS est correct
import moi from '../image/moi.jpg'; // Assurez-vous que le chemin d'accès au fichier CSS est correct

export default function Entete() {
  return (
    <header className="Entete">
      <img src={vague} className="vague" alt="fond" />

      <nav>
        <div className="logo">
          <h3>MN</h3>
        </div>
        <div>
          {/* <a href="#">Accueil</a>
          <a href="#">Projets</a>
          <a href="#">Contact</a> */}
        </div>
        <button>télécharger le cv</button>
      </nav>

      <div className="presentation">
        
        <div className="presentation-texte">
          <h1>Allo, mon nom est</h1> 
          <h1>Moumy Ndiaye</h1>
          

          <p>
            Passionnée par la programmation et le design,<br />
            j'aime concrétiser mes idées en projets.<br />
            Ma motivation constante m'incite à apprendre<br />
            et progresser pour devenir une développeuse compétente.<br />
            Je suis actuellement à la recherche d'un stage pour<br />
            mettre en pratique mes compétences.
          </p>
        </div>

        <div className="container-img">
          <img src={moi} alt="" />
        </div>

      </div>

    </header>
  );
}

