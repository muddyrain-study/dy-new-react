import React, { useCallback, useMemo, useState } from "react";
import ChildCom1 from "./components/ChildCom1";
import ChildCom2 from "./components/ChildCom2";

import styles from "./css/App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  console.log("App渲染了");
  const test = useMemo(
    () => () => {
      console.log("test触发了");
    },
    []
  );
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>

      <div className={styles.childComContainer}>
        <ChildCom1 counter={counter1} setCounter={setCounter1} test={test} />
        <ChildCom2 counter={counter2} setCounter={setCounter2} test={test} />
      </div>
    </div>
  );
}

export default App;
