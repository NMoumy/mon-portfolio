import React, { useEffect, useState } from "react";
import "./LesProjets.scss";
import UnProjet from "./UnProjet";
import Superposition from "./Superposition";
import { lireTout } from "../code/projet-modele";
import { lireProjet } from "../code/projet-modele"; // Importez la fonction lireProjet

export default function LesProjets() {
  const [superpositionVisible, setSuperpositionVisible] = useState(false);
  const [projets, setProjets] = useState([]);
  const [projetActif, setProjetActif] = useState(null);

  useEffect(() => {
    async function chercherProjets() {
      const projetsFS = await lireTout();
      setProjets(
        projetsFS.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
    chercherProjets();
  }, []);

  const afficherSuperposition = async (projetId) => {
    // Empêcher le défilement de la page
    document.body.style.overflow = "hidden";

    // Charger les informations du projet
    const projet = await lireProjet(projetId);

    // Afficher la superposition avec les informations du projet
    setProjetActif(projet);
    setSuperpositionVisible(true);
  };

  const fermerSuperposition = () => {
    // Activer le défilement de la page
    document.body.style.overflow = "auto";

    // Cacher la superposition
    setProjetActif(null);
    setSuperpositionVisible(false);
  };

  return (
    <section className="LesProjets">
      {projets.map((projet) => (
        <UnProjet
          key={projet.id}
          {...projet}
          onClick={() => afficherSuperposition(projet.id)} // Transmettez l'ID du projet
        />
      ))}

      {superpositionVisible && projetActif && (
        <Superposition projet={projetActif} onClose={fermerSuperposition} />
      )}
    </section>
  );
}
