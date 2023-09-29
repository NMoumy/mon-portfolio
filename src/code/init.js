import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./fb-config";

// Initialiser l'appli Firebase
const app = initializeApp(firebaseConfig);

// Obtenir une connexion à la BD Firestore
export const bd = getFirestore(app);

// Storage
// export const stockage = getStorage(app);

// Noms des collections Firestore utilisées dans l'appli
export const collProjets = 'mes-projets';
export const collLiens = 'liens';