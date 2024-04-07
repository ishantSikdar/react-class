import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
import "./App.css";

function App() {
  console.log("App")
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Count")
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  console.log("CountRenderer")
  const count = useRecoilValue(countAtom);
  return <h1>{count}</h1>;
}

function Buttons() {
  console.log("Buttons")
  const [count, setCount] = useRecoilState(countAtom);
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

export default App;
