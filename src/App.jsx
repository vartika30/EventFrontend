import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';


import Events from "./Event"

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0)

  return (
    <>
    <Events />
    </>
  )
}

export default App

