import React, { useState, useEffect } from 'react'
import './index.css'
import axios from 'axios'

const useNotes = (url) => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    (async () => {
      const res = await axios.get(url)
      setNotes(res.data)
    })()
  }, [url])
  return notes
}

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])
  const notes = useNotes(BACKEND_URL)

  const handleClick = () => {
    setCounter(counter + 1)
    setValues([...values, counter])
    console.log('values', values)
  }

  return (
    <div className='container'>
      Hello W{counter}bpack
      <button onClick={handleClick}>butt</button>
      <div>{notes.length} notes on server {BACKEND_URL}</div>
    </div>
  )
}

export default App