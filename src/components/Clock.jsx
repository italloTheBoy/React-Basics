import { useState, useEffect } from "react"
import "./Clock.css"

export function Clock() {
  const [time, setTime] = useState(new Date())

  // useEffect(() => {
    setTimeout(() => setTime(new Date), 1000)
  // })
  
  return (
    <section id="timer">
      <strong>{time.toLocaleTimeString()}</strong>
    </section>
  )
}
