import { useState } from "react"


export function NewTodoForm({onSubmit}) {
    const [ newItem, setNewItem ] = useState("")
    // const [ todos, setTodos ] = useState([])

    

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
    
        // setTodos(currentTodos => {
        //   return [
        //     ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}
        //   ]
        // })
    
        setNewItem("")
      }


    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form border-yellow">
                <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item"/>
                </div>
                <button className="btn">Add</button>
            </form>
        </>
    )
}

// export default NewTodoForm;