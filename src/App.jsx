import "./styles.css"
import { useState, useEffect } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
     localStorage.setItem("ITEMS", JSON.stringify(todo))
  }, [todo])

  const addTodo = title => {
    setTodo(currentTodo => {
        return [
          ...currentTodo,
          {id: crypto.randomUUID(), title, completed: false}
        ]
      })
  }
  
  const toggleTodo = (id, completed) => {
    setTodo(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
        })
      })
    }

  const deleteTodo = id => {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }
    
    return (
      <>
        <NewTodoForm addTodo={addTodo}/>
        <h1 className="header">Todo List</h1>
        <TodoList todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

