import React, { useState } from 'react'
import './index.css'

const App = () => {
  const [counter, setCounter] = useState(0) 

  return (
    <div className='container'>
      Hello W{counter}bpack
      <button onClick={() => setCounter(counter + 1)}>butt</button>
    </div>
  )
}

export default App