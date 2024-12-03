"use client";
import { useI18n } from "../../../locales/client"


export default async function recruteur(){
  const t = await useI18n();

  return (
    <div>
      <h1 className="form">{t("list")} </h1>
      <p className="results">{t("firstname")} : <strong>Théodort</strong></p>
      <p className="results">{t("name")} : thassur</p>
      <p className="results">Email : <a href="mailto:theodortthassur@gmail.com">theodortthassur@gmail.com</a></p>
    </div>
  );
}


