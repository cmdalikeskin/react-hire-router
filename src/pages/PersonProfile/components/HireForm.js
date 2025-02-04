import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HireForm({ setHiredPeople, person }) {
  // console.log(person)

  const navigate = useNavigate()


  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()

    setHiredPeople(prevHiredPeople => [...prevHiredPeople, person]);

    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit" onClick={handleSubmit}>Hire</button>
    </form>
  )
}

export default HireForm
