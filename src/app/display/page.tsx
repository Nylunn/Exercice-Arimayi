"use client";

import { useSearchParams } from "next/navigation";

const DisplayData = () => {
  const searchParams = useSearchParams();

  const formData = {
    name: searchParams.get("name") || "",
    surname: searchParams.get("surname") || "",
    email: searchParams.get("email") || "",
  };

  return (
    <div>
      <h1 className="form">Liste des candidats :</h1>
      <p className="results">Prénom : {formData.surname}</p>
      <p className="results">Nom : {formData.name}</p>
      <p className="results">Email : {formData.email}</p>
    </div>
  );
};

export default DisplayData;
