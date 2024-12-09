import {Link} from '@/i18n/routing';
import {useTranslations} from 'next-intl';


export default function recruteur() {

    const t = useTranslations("recrutement");
    return (
        <div>
        <h1 className="recrutementText">{t("name")}</h1>
        <Link href="./" className="link">{t("return")}</Link> <br />
        <Link href="/display" className="link">{t("display")}</Link>
           </div>
    );

}