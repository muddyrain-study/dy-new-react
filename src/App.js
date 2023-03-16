import { useState, useEffect, useRef, useId } from "react";
import ChildCom1 from "./components/ChildCom1";
import { context } from "./context";

const { Provider } = context;
function App() {
  const [count, setCounter] = useState(0);
  const comRef = useRef();
  function handleClick() {
    comRef.current.click();
  }
  return (
    <Provider
      value={{
        count,
        setCounter,
      }}
    >
      <ChildCom1 ref={comRef} />
      <button onClick={handleClick}>click</button>
    </Provider>
  );
}

export default App;
