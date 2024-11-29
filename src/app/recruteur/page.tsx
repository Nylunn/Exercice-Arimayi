import Link from "next/link"
export default function recruteur() {
    return (
        <div>
        <h1 className="recrutementText">Bienvenue sur votre espace <strong>Recruteur</strong>, pour commencer, choisissez une catégories :</h1>
        <Link href="./" className="link">Acceuil</Link> <br />
        <Link href="/display" className="link">Liste des candidats</Link>
           </div>
    )
}