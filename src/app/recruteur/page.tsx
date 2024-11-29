import Link from "next/link"
export default function recruteur() {
    return (
        <div>
        <Link href="./" className="link">Acceuil</Link> <br />
        <Link href="/recruteur/list" className="link">Liste des candidats</Link>
        <h1>Hello, Recruteur</h1>
        </div>
    )
}