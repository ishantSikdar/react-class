import { memo, useCallback, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const rawFunction = useCallback(() => {
    setCount(count + 1);
  }, []);
  
  console.log("Parent Renders")
  return (
    <>
      <MyComponent inputFunction={rawFunction} />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

const MyComponent = memo(({ inputFunction }) => {
  console.log("Child Component renders", inputFunction);
  return <div>Hi there</div>; 
});

export default App;
