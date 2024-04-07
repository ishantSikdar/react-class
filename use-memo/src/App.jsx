import { useMemo, useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(1);

  let count = useMemo(() => {
    console.log("Memo called");
    // expensive operation shouldn't be performed every render
    let sum = 0;
    for (let i = 0; i <= input; i++) {
      sum = sum + i;
    }

    return sum;
  }, [input]);
  

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <p>Sum is {count}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}
