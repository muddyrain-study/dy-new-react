import React, { useContext, useImperativeHandle, useRef } from "react";
import ChildCom3 from "./ChildCom3";
import { context } from "../context";
export const Fragment = (props, ref) => {
  const childRef = useRef();
  const { count, setCounter } = useContext(context);
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("我是 click", childRef.current);
    },
  }));
  return (
    <div ref={childRef}>
      子组件
      <span>{count}</span>
      <button onClick={() => setCounter(count + 1)}>点我</button>
      <ChildCom3 />
    </div>
  );
};

export default React.forwardRef(Fragment);
