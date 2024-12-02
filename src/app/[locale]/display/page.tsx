"use client";

import { getI18n } from "@/app/locales/server";


  const t = await getI18n();


export default async function recruteur(){
  return (
    <div>
      <h1 className="form">{t("list")} </h1>
      <p className="results">{t("firstname")} : <strong>Théodort</strong></p>
      <p className="results">{t("name")} : thassur</p>
      <p className="results">Email : <a href="mailto:theodortthassur@gmail.com">theodortthassur@gmail.com</a></p>
    </div>
  );
}


