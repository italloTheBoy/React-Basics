import { useState, useEffect } from "react"
import "./Name.css"

export function Name() {
  const [name, setName] = useState("Mundo")
  
  const handleChange = (e) => {
    let name = e.target.value.trim() === "" 
      ? "Mundo" 
      : e.target.value.trim().toLowerCase()

    return setName(name)
  }

  return (
    <section className="container">
      {name === "itallo"
        ? <h1>Seja bem vindo criador!</h1>
        : <h1>Olá <span id="name">{name}</span>!!!</h1>
      }

      <input 
        type="text" 
        className="input"
        placeholder="Insira um nome" 
        autoFocus
        onChange={handleChange} 
      />
    </section>
  )

}