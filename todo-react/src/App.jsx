import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([
    {
      title: "Go gym",
      desc: "At 9pm",
      completed: false
    },
    {
      title: "Study DSA",
      desc: "At 6pm",
      completed: true
    },
    {
      title: "Cook Food",
      desc: "At 8pm",
      completed: false
    },
  ])

  return (
    <>
      {todos.map((element, index) => (
        <Todo title={element.title} desc={element.desc} key={index}></Todo>
      ))}
    </>
  )
}

function Todo(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </>
  )
}

export default App
