import React from 'react';
import './Appli.scss';
import Entete from './Entete';
import Contenu from './Contenu';
import PiedDePage from './PiedDePage';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete/>
      <Contenu/>
      <PiedDePage/>
    </div>
  );
}
