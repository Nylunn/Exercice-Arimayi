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
      <h1>Données du formulaire</h1>
      <p><strong>Prénom :</strong> {formData.surname}</p>
      <p><strong>Nom :</strong> {formData.name}</p>
      <p><strong>Email :</strong> {formData.email}</p>
    </div>
  );
};

export default DisplayData;
