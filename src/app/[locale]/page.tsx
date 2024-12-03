"use client";
import { Button } from "antd";
import { getI18n } from "../locales/server";

 // Assure le rendu côté client
export default async function Home() {

  const t = await getI18n();

  const handleSubmit = async () => {
    console.log("Formulaire envoyer avec succès")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>{t ("forms")} : </h1>
        <label className='results'>{t ("firstname")}:</label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div>
        <label className='results'>{t ("name")} :</label>
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
      </div>
      <Button type="primary" className='submit_btn'>{t ("send")}</Button>
    </form>
  );
};



