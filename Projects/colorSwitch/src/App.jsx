import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 py-2'>
          <div className='flex flex-wrap gap-3 justify-center bg-amber-200 p-4 rounded-xl w-4xl'>
            <button 
              onClick={()=> {setColor('green')}}
            className='flex flex-wrap justify-center p-3 bg-green-600 rounded-3xl w-25'>Green</button>
            <button
              onClick={()=> {setColor('blue')}}
             className='flex flex-wrap justify-center p-3 bg-blue-600 rounded-3xl w-25'>Blue</button>
            <button 
              onClick={()=> {setColor('red')}}
            className='flex flex-wrap justify-center p-3 bg-red-600 rounded-3xl w-25'>Red</button>
            <button
              onClick={()=> {setColor('yellow')}}
            className='flex flex-wrap justify-center p-3 bg-yellow-300 rounded-3xl w-25'>Yellow</button>
            <button 
              onClick={()=> {setColor('black')}}
            className='flex flex-wrap justify-center p-3 bg-black rounded-3xl w-25 text-amber-50'>Black</button>
            <button 
              onClick={()=> {setColor('orange')}}
            className='flex flex-wrap justify-center p-3 bg-orange-600 rounded-3xl w-25'>Orange</button>
            <button 
                onClick={()=> {setColor('white')}}
            className='flex flex-wrap justify-center p-3 bg-white rounded-3xl w-25'>White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
