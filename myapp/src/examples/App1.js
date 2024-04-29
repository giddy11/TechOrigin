import { useState } from "react"
import "../src/style.css"
import "./App.css"

const Person=(props)=> {
  return (
    <>
    <h1>First Name: {props.name}</h1>
    <h1>Last Name: {props.lname}</h1>
    <h1>Age: 30</h1>

    </>
  )
}

const App = ()=> {
  const name = 'giddy'
  const isNameShowing = false
  return (
    <div className="App">
      <h1>Hello, React</h1>
      <Person name={'John'} lname={'peter'}></Person>
      <Person></Person>
      <Person></Person>
    </div>
  )  
}

// const App = ()=> {
//   const name = 'giddy'
//   const isNameShowing = false
//   return (
//     <div className="App">
//       <h1>Hello, React {name ? (
//         <>
//         <div>
//           Hello world
//         </div>
//         </>
//       ):(
//         <div>leave me</div>
//       )}</h1>
//     </div>
//   )  
// }


export default App
