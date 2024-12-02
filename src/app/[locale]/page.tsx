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
        <label className='results'>{t ("hello")} :</label>
        <input
          type="text"
          name="name"
        />
      </div>
      <div>
        <label className='results'>Prénom :</label>
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
      <button type="submit" className='submit_btn'>Envoyer</button>
    </form>
  );
};



