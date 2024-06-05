import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsRendered(r => !r);
    }, 5000);
  }, []);

  return (
    <>
      {isRendered && <MyClassComponent />}
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    }
  })

  return <div>Hi from My component</div>
}

class MyClassComponent extends React.Component {
  componentDidMount() {
    console.log("Mounted");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return <div>Hi from My class component</div>
  }
}


export default App
