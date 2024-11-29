'use client';
import { NextApiRequest, NextApiResponse } from 'next';

// Stockage temporaire 
let formData: Array<{ surname: string; name: string; email: string; }> = [];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Récupère les données du formulaire envoyées dans le body
    const { surname, name, email } = req.body;

    if (!name || !surname  || !email) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    // Ajoute les données au tableau
    formData.push({ name, surname, email });

    return res.status(201).json({ message: 'Données enregistrées avec succès.', data: { name, surname, email } });
  } else if (req.method === 'GET') {
    // Retourne les données stockées
    return res.status(200).json(formData);
  } else {
    // Méthode non supportée
    return res.status(405).json({ message: 'Méthode non autorisée.' });
  }
}

