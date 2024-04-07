import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import "./App.css";
import { isEvenSelector } from "./store/selectors/count";

function App() {
  console.log("App");

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("Count");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <IsEven />
    </div>
  );
}

function CountRenderer() {
  console.log("CountRenderer");

  const count = useRecoilValue(countAtom);
  return <h1>{count}</h1>;
}

function Buttons() {
  console.log("Buttons");

  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        ( - )
      </button>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        ( + )
      </button>
    </div>
  );
}

function IsEven() {
  console.log("Is Even");
  const count = useRecoilValue(isEvenSelector);
  
  return <div>{count ? "Is Even" : null}</div>;
}

export default App;
