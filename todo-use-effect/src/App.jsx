import { useState, useEffect } from 'react'

const ROOT = "https://sum-server.100xdevs.com"
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(`${ROOT}/todos`)
      .then((res) => (res.json()))
      .then((data) => setTodos(data.todos))

  }, [])

  return (
    <>
      {todos.map((e) => (<Todo key={e.id} title={e.title} desc={e.description} />))}
    </>
  )
}


function Todo({ title, desc }) {
  return <div>
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>
}

export default App
