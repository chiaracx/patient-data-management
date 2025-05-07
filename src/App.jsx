import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import PatientList from './components/PatientList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Your Patient Data Manager</h1>
      <PatientList />
    </>
  )
}

export default App
