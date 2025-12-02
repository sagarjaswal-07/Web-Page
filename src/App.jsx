import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './Page/Landing'
import Navbar from './Page/Navbar'
import Home from './Page/Home'
import Customer from './Page/Customer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Customer />
      {/* <Landing /> */}
    </>
  )
}

export default App
