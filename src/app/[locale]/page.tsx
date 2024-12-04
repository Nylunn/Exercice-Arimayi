"use client";
import { Button } from "antd";
import {useTranslations} from 'next-intl';


export default  function Home() {

  const t = useTranslations("HomePage");


  return (
    <form>
      <div>
        <h1 className="results">{t("title")}</h1>
      </div>
      <div>
        <label className='results'>{t("firstname")}:</label>
        <input
          type="text"
          name="surname"
        />
      </div>
      <div>
        <label className='results'>{t("name")}:</label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div>
        <label className='results'>Email :</label>
        <input
          type="email"
          name="email"
        />
      </div>
      <Button type="primary" className='submit_btn'>Envoyer</Button>
    </form>
  );
};