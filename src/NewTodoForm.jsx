import { useState } from "react"

export function NewTodoForm(props){
    // props.addTodo
    const [newItem, setNewItem] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (newItem === "") return

        props.addTodo(newItem)

        setNewItem("")
      } 

    return (

        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input onChange={e => setNewItem(e.target.value)} value={newItem} type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
        </form>
    )
}