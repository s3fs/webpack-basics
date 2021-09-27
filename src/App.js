import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const handleClick = () => {
    setCounter(counter + 1)
    setValues([...values, counter])
    console.log('values', values)
  }

  return (
    <div className='container'>
      Hello W{counter}bpack
      <button onClick={handleClick}>butt</button>
    </div>
  )
}

export default App