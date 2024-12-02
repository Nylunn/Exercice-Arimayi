"use client";

import fakedata from "../data/fakedata";

const DisplayData = () => {



  return (
    <div>
      <h1 className="form">Liste des candidats : </h1>
      <p className="results">Prénom : <strong>Théodort</strong></p>
      <p className="results">Nom : thassur</p>
      <p className="results">Email : <a href="mailto:theodortthassur@gmail.com">theodortthassur@gmail.com</a></p>
    </div>
  );
}

export default DisplayData;
