import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./Context";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Wrap anyone that wants to use the teleported value inside this API provider */}
      {/* i.e, wrap all those components who or whos children are going to use the states provided */}
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  // Recieve Context/State from teleporter
  const { count } = useContext(CountContext);

  return <h2>{count}</h2>;
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        ( - )
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ( + )
      </button>
    </div>
  );
}
