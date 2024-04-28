import { useState } from "react"
import "../src/style.css"


export default function App() {
  //learn about state befor you continue this section
  const { newItem, setNewItem } = useState("")
  return (
    <>
    <form className="new-item-form border-yellow">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item"/>
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list border-yellow">
      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>

      <li>
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
    
  )
}

