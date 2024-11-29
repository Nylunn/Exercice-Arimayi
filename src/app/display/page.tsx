'use client';

import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

interface FormData {
  name: string;
  surname: string;
  email: string;
}

const DisplayData = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    if (router.isReady) {
      // Récupère les données depuis les query params
      const { name, surname, email } = router.query;
      setFormData({ name: name as string, surname: surname as string, email: email as string });
    }
  }, [router.query, router.isReady]);

  if (!formData) {
    return <p>Chargement des données...</p>;
  }

  return (
    <div>
      <h1>Données du formulaire</h1>
      <p><strong>Nom :</strong> {formData.name}</p>
      <p><strong>Prénom :</strong> {formData.surname}</p>
      <p><strong>Email :</strong> {formData.email}</p>
    </div>
  );
};

export default DisplayData;
