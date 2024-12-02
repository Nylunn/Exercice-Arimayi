import Link from "next/link"
import { getI18n } from "@/app/locales/server";
export default async function recruteur() {
    const t = await getI18n();
    return (
        <div>
        <h1 className="recrutementText">{t("recrutement")}</h1>
        <Link href="./" className="link">{t("home")}</Link> <br />
        <Link href="/display" className="link">{t("list")}</Link>
           </div>
    )
}