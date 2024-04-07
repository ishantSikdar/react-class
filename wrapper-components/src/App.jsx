  import { useState } from 'react'

  function App() {
    return <div>
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  }

  function CardWrapper({ innerComponent }) {
    return <div style={{ border: "2px solid black" }} >
      {innerComponent}
    </div>
  }

  function TextComponent() {
    return <h1>Hello Worlldd</h1>
  }

  export default App
