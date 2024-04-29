import { NewTodoItem } from "./TodoItem"


export function NewTodoList({ todos, toggleTodo, deleteTodo }){
    return (
      <>
        <h1 className="header">Todo List</h1>
        <ul className="list border-yellow">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                // return (
                //     <NewTodoItem 
                //         id={todo.id} 
                //         completed={todo.completed} 
                //         title={todo.title} 
                //         key={todo.id}
                //     />
                // )

                return (
                    <NewTodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                )
            })}
        </ul>
      </>
    )
}