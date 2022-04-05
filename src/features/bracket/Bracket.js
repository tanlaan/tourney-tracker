import React, {useState, useEffect} from 'react'
import styles from './Bracket.module.css'

export function Bracket() {
  const [players, setPlayers] = useState(2)
  const [names, setNames] = useState([])

  const handlePlayer = (e) => {
    setPlayers(parseInt(e.target.value))
  }
  const handleNames = position => (e) => {
    const newNames = [...names]
    newNames[position]['name'] = e.target.value
    setNames(newNames)
  }

  useEffect(() => {
    if (names.length > players) {
      // slice to size
      setNames(names.slice(0, (players - names.length)))
    }
    if (names.length < players) {
      // add blank players
      const additional = Array(players - names.length).fill().map(() => ({name: '', winner: false}))
      setNames([...names, ...additional])
    }
  },[players])

  return (
    <div>
      <label htmlFor="players">How many players?</label>
      <input type="number" id="players" name="players" min="2" max="32" onChange={handlePlayer} value={players} />
      <hr />
      {names.map((name, i) => (
        <input key={i} type="text" value={names[i].name} onChange={handleNames(i)}></input>
      ))}
    </div>
  )
}