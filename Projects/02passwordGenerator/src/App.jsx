import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed ] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
    const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numAllowed) {
      str+= "0123456789";
    }
    if (charAllowed) {
      str+= "!@#$%&(){}?-_=+<>`~^";
    }
  
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  
  } , [length,numAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(() => {
    passRef.current?.select()
    // passRef.current?.setSelectionRange(0,10)// will only copy the selected range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
     <div className='w-150 mx-auto m-9 px-5 py-5 text-orange-500 bg-gray-800 rounded-lg'>
      <div className='flex shadow rounded-lg mb-4 overflow-hidden'> Password Generator
        <input 
        type="text"
        value={password}
        className='bg-amber-50 outline-none w-full py-1 px-3 rounded-lg'
        placeholder='password'
        readOnly
        ref={passRef}
        />
        <button 
        
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label >Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
            {/* Character checkbox */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
