import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-5 rounded-xl font-bold mb-5'>hello tailwind css</h1>
    <Card name='monster'/>
    <Card name='monster2'/>
    </>
  )
}

export default App
