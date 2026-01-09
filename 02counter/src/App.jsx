import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, aviCounter] = useState(15)
  
  // let counter = 75

  const addValue = () => {
    console.log("clicked", counter)
    // counter = counter+1
    // aviCounter(counter)
    // or
    // if(counter<24){
    //   aviCounter(counter+1)
    // } else{
    //   // counter = 0
    //   aviCounter(counter=0)
    // }
    // or
    aviCounter(prevCounter => prevCounter+1)
    aviCounter(prevCounter => prevCounter+1)
    aviCounter(prevCounter => prevCounter+1)
  }
  const removeValue = () =>{
    console.log("removing number, bitch!", counter)
    if(counter>0){
      aviCounter(counter-1)
    }else{
      // counter = 24
      aviCounter(counter=24)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

//assingment remove karne par kavi value 0 k niche na jay 
//assingment add karne par kavi value 20 k upar na jay 