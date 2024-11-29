"use client";

import { useSelector,useDispatch } from "react-redux"
import { RootState } from "./store/store"
import { decrement, increment } from "./store/slice"
import Link from "next/link";
import { Button } from "antd";

export default function Home() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
      <><div className="divform"style={{paddingLeft:15,paddingTop:25, margin:10, fontSize:25, fontFamily:'Poppins'}}>
      <h1>Formulaire à remplir</h1>
          <form action="POST" className="FormCandidats">
            <label htmlFor="FirstName">Prénom :</label>
            <input type="text" id="FirstName" placeholder=" John"/> <br />
            <label htmlFor="Name">Nom :</label>
            <input type="text" id="Name" placeholder=" Doe"/> <br />
            <label htmlFor="number">Numéro :</label>
            <input type="text" id="number" placeholder=" 06.24.25.36.35"/> <br />
            <label htmlFor="work">Métier :</label>
            <input type="text" id="work" placeholder=" Développeur Front-End"/> <br />
            <button type="submit" className="Button-Form" style={{marginTop:15, marginLeft:75, padding:20, paddingBottom:10, paddingTop:10, color:"green", borderRadius:20, border:"solid", alignItems:"center"}}>ENVOYER</button>
          </form>
          </div>
          </>
    )
}