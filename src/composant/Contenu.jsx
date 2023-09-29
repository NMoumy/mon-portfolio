import './Contenu.scss';
import LesProjets from './LesProjets';
import Superposition from './Superposition';

 export default function Contenu() {
  return (
    <main className="Contenu">
      <h2>Projets</h2>
      <LesProjets/>
      <Superposition/>
    </main>
  );
}

