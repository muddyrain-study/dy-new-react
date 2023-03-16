import { useState, useEffect, useRef } from "react";
import ChildCom1 from "./components/ChildCom1";

function App() {
  const comRef = useRef();
  function handleClick() {
    comRef.current.click();
  }
  return (
    <>
      <ChildCom1 ref={comRef} />
      <button onClick={handleClick}>click</button>
    </>
  );
}

export default App;
