import { useState } from 'react'
import './App.css'

function App() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

const prenomInput = (e) => {
    setPrenom(e.target.value)
}

const NomInput = (e) => {
  setNom(e.target.value)
}

  return (
    <>
    <label htmlFor="prenom">Prénom: </label>
    <input type="text" id='prenom' value={prenom} onInput={prenomInput}/>

    <label htmlFor="nom">Nom: </label>
    <input type="text" id='nom' value={nom} onInput={NomInput}/>

    <p>Bonjour <b>{prenom} {nom.toUpperCase()}</b>, bienvenue sur l'application !</p>
    </>
  )
}

export default App
