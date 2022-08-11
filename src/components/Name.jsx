import { useState, useEffect } from "react"
import "./Name.css"

export function Name() {
  const [name, setName] = useState("Mundo")

  function handleChange(e) {
    let name = e.target.value.length === 0 
      ? "Mundo" 
      : e.target.value

    if (name.length  === 0) {
      name = "Mundo"
    }
    
    return setName(name)
  }

  return (
    <section className="container">
      <h1>Olá <span id="name">{name}</span>!!!</h1>

      <input 
        className="input"
        type="text" 
        placeholder="Insira um nome" 
        autoFocus={true} 
        onChange={(e) => handleChange(e)} 
      />
    </section>
  )

}