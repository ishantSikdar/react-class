import { useState, memo } from 'react'

function App() {
  const [name, setName] = useState("Ishant")

  function onClickHandler() {
    setName(Math.random())
  }

  return (
    <div>
      <button onClick={onClickHandler}>Change my Name</button>
      <Header title={name}></Header>
      <Header title={"Aman"}></Header>
      <Header title={"Aman"}></Header>
      <Header title={"Aman"}></Header>
      <Header title={"Aman"}></Header>
    </div>
  )
}

const Header = memo(function ({title}) {
  return <h1>My name is {title}</h1>
})

export default App
