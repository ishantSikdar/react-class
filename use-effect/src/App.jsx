import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [todoId, setTodoId] = useState(1)

  function onClick(event) {
    setTodoId(event.target.innerText)
  }

  return <div>
    <button onClick={onClick}>1</button>
    <button onClick={onClick}>2</button>
    <button onClick={onClick}>3</button>
    <button onClick={onClick}>4</button>

    <div>
      <Todo id={todoId} />
    </div>
  </div>
}

function Todo({ id }) {
  const [todo, setTodo] = useState({})

  // here
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => {
        console.log(res)
        setTodo(res.data.todo)
      })
  }, [id])

  return <div>
    <p>{todo.title}</p>
    <p>{todo.description}</p>
  </div>

}

export default App