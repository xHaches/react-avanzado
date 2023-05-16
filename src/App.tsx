import { useState } from 'react'
import { Navigation } from './routes/navigation'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
    </>
  )
}
