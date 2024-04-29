import { useState, useEffect } from "react"
import "../src/style.css"
import "./App.css"

const App = ()=> {
  const [counter, setCounter] = useState(0)

  useEffect(()=> {
    alert(`You have changed the counter to ${counter}`)
    // setCounter(5)
  }, [counter])
  return (
    <div className="App">
      <button onClick={()=> setCounter((prevCount)=> prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter((prevCount)=> prevCount + 1)}>+</button>

    </div>
  )  
}

export default App
