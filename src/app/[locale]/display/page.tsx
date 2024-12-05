"use client";
import {useTranslations} from 'next-intl';


export default function recruteur(){
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1 className="form"> {t("title")} </h1>
      <p className="results">{t("firstname")} : <strong>Théodort</strong></p>
      <p className="results">{t("name")} : thassur</p>
      <p className="results">Email : <a href="mailto:theodortthassur@gmail.com">theodortthassur@gmail.com</a></p>
    </div>
  );
}
