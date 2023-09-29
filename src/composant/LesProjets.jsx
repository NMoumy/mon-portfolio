import React, { useEffect, useState } from 'react';
import './LesProjets.scss';
import UnProjet from './UnProjet';
import Superposition from './Superposition';
import { lireTout} from '../code/projet-modele';

export default function LesProjets() {
  const [superpositionVisible, setSuperpositionVisible] = useState(false);

  const [projets, setProjets] = useState([]);

  useEffect(()=> {
    async function chercherProjets() {
      const projetsFS = await lireTout()
      setProjets(projetsFS.map(
          doc => ({id: doc.id, ...doc.data()})
      ));
    }
    chercherProjets();
  }, []);

  const afficherSuperposition = () => {
    // Empêcher le défilement de la page
    document.body.style.overflow = 'hidden';

    // Afficher la superposition
    setSuperpositionVisible(true);
  };

  const fermerSuperposition = () => {
    // Activer le défilement de la page
    document.body.style.overflow = 'auto';

    // Cacher la superposition
    setSuperpositionVisible(false);
  };

  return (
    <section className="LesProjets">
      {
        projets.map(
          projet => <UnProjet key={projet.id} {...projet} onClick={afficherSuperposition} />
        )
      }
      
      {
        superpositionVisible ?
          projets.map(
            projet => <Superposition key={projet.id} {...projet} onClose={fermerSuperposition}/> 
          )
          : ''
      }
    </section>
  );
}
 