import { useEffect, useState } from "react"
import "../src/style.css"
import { NewTodoForm } from "./NewTodoForm"
import { NewTodoList } from "./TodoList"


export default function App() {
  //learn about state befor you continue this section
  const [ newItem, setNewItem ] = useState("")
  const [ todos, setTodos ] = useState([])
  // const [ todos, setTodos ] = useState(() => {
  //   const localValue = localStorage.getItem("ITEMS")
  //   if (localValue == null) return null

  //   return JSON.parse(localValue)
  // })


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
        setTodos(currentTodos => {
          return [
            ...currentTodos, {id: crypto.randomUUID(), title, completed: false}
          ]
        })
  }

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}
      ]
    })

    setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id)
          return {...todo, completed}

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
        
    })
  }


  // console.log(todos)

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <NewTodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
    
  )
}

/**
 * <li>
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
 */