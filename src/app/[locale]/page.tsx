"use client";
import { Button } from "antd";
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';


export default  function Home() {

  const t = useTranslations("HomePage");


  return (
    <form>
      <div>
        <h1>{t("title")} : </h1>
        <label className='results'>Formulaire des candidats:</label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div>
        <label className='results'> surname:</label>
        <input
          type="text"
          name="surname"
        />
      </div>
      <div>
        <label className='results'>Email :</label>
        <input
          type="email"
          name="email"
        />
      <Link href="/about">{t('about')}</Link>
      </div>
      <Button type="primary" className='submit_btn'>Envoyer</Button>
    </form>
  );
};