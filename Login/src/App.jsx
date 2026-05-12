import { useState } from 'react'

import { Login } from './pages/Login'
import { Card } from './pages/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-center'>Learning Tailwind</h1>
    <Card/>
    </>
  )
}

export default App
