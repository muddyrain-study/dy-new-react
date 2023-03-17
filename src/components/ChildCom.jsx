import React from "react";

export const Fragment = (props) => {
  console.log("ChildCom渲染");
  const lis = props.stu.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div>
      <div>ChildCom</div>
      <button onClick={() => props.setCounter(props.counter + 1)}>+1</button>
      <div>{props.counter}</div>
      <ul>{lis}</ul>
    </div>
  );
};

export default React.memo(Fragment);
