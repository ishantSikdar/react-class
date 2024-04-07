import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(20000);
  const spanRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(spanRef);
      console.log(spanRef.current);
      spanRef.current.innerHTML = 10;
    }, 5_000)
  }, []);

  return <div>
    This is the number <span ref={spanRef}>{count}</span>
  </div>;
}

export default App;
