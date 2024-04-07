import { useState, memo } from 'react'

let todoId = 1

function App() {
  const [todos, setTodos] = useState([])

  function addTodo() {
    const newTodo = {
      id: todoId++,
      title: prompt("Add a title"),
      desc: prompt("Give a description")
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map((e, i) => (<Todo title={e.title} desc={e.desc} key={e.todoId} />))}
    </>
  )
}

const Todo = memo(function(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
})

export default App
