import { useState } from "react"
import "./Form.css"

export function Form(props) {
  const { name } = props

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  const fruitList = [
    "laranja",
    "limão", 
    "coco", 
    "manga",
    "maçã",
    "melancia",
    "mamão",
    "kiwi",
    "abacate",
  ].sort()

  const [fruit, setFruit] = useState(fruitList[0])

  const handleChange = (e) => {
    if (fruitList.includes(e.target.value)) {
      setFruit(e.target.value)    
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    name === "mundo"
      ? alert(`Todo mundo gosta de ${fruit}.`) 
      : alert(`${capitalizeFirstLetter(name)} gosta de ${fruit}.`)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="fruta" className="form-label" >Fruta:</label>
      <select id="fruta" className="form-select" value={fruit} onChange={handleChange} >
        {fruitList.map(fruit => 
          <option value={fruit}>
            {capitalizeFirstLetter(fruit)}
          </option>
        )}
      </select>

      <button type="submit" className="form-button" >Send</button>
    </form>
  )
}