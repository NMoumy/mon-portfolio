import { collection, getDocs, orderBy, query, } from "firebase/firestore";
import { bd, collProjets, collLiens } from "./init";

// lire les dossiers
export async function lireTout() {
    const projetsFS = await getDocs(
        query(
            collection(bd, collProjets)
        )
    );
    return projetsFS.docs;
}

export async function lireLien(id) {
    const liensFS = await getDocs(
        query(
            collection(bd, collProjets, id, collLiens)
        )
    );
    return liensFS.docs;
}
