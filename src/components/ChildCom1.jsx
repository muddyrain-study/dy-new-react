import React, { useImperativeHandle, useRef } from "react";
export const Fragment = (props, ref) => {
  const childRef = useRef();
  useImperativeHandle(ref, () => ({
    click: () => {
      console.log("我是 click", childRef.current);
    },
  }));
  return <div ref={childRef}>子组件</div>;
};

export default React.forwardRef(Fragment);
