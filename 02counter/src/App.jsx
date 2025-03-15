import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0) // useage of hook in react.
  // let counter = 5;

  const addValue = () => {
    // console.log('button is clicked', counter);
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = ()=> {
    if(counter > 0){
      // console.log('was clicked', Math.random());
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Hello React!!</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >ADD VALUE</button> <br />
      <button
      onClick={removeValue}
      >REMOVE VALUE</button>
    </>  
  )
}

export default App
