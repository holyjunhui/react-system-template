import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('World')

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </p>
      <p>You clicked {count} times</p>
    </div>
  )
}

export default Home
