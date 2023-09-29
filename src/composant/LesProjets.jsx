import React, { useState } from 'react';
import './LesProjets.scss';
import UnProjet from './UnProjet';
import Superposition from './Superposition';

export default function LesProjets() {
  const [superpositionVisible, setSuperpositionVisible] = useState(false);

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
      <UnProjet onClick={afficherSuperposition} />
      <UnProjet onClick={afficherSuperposition} />
      <UnProjet onClick={afficherSuperposition} />
      {superpositionVisible ? <Superposition onClose={fermerSuperposition}/> : ''}
    </section>
  );
}
