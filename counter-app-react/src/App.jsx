import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CustomButton count={count} setCount={setCount}></CustomButton>
  )
}

function CustomButton(props) {

  function updateCount() {
    props.setCount(count => count + 1)
    console.log(props.count)
  }

  return <button onClick={updateCount}>Counter {props.count}</button>
}

export default App