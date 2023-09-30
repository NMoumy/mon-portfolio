import { collection, getDocs, query, doc, getDoc } from "firebase/firestore";
import { bd, collProjets } from "./init";

// lire les dossiers
export async function lireTout() {
    const projetsFS = await getDocs(
        query(
            collection(bd, collProjets)
        )
    );
    return projetsFS.docs;
}

export async function lireProjet(projetId) {
  const projetDocRef = doc(bd, collProjets, projetId);
  const projetDoc = await getDoc(projetDocRef);

  if (projetDoc.exists()) {
    return { id: projetDoc.id, ...projetDoc.data() };
  } else {
    return null; // Gérer le cas où le projet n'existe pas
  }
}

