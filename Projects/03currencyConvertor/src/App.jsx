import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex pt-10 px-4 py-5 justify-center '>
      <h1 className='bg-amber-500 font-bold text-amber-50 w-screen flex justify-center'>HEllo React</h1>
      </div>
    </>
  )
}

export default App
