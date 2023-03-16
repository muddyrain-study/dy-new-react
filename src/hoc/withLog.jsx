import { useEffect } from "react";

// 高阶组件是一个函数，接收一个组件作为参数
// 返回一个新的组件
function withLog(Com) {
  // 返回的新组件
  return function NewCom(props) {
    // 抽离的公共逻辑
    useEffect(() => {
      console.log(
        `日志：组件${
          Com.name
        }已经创建，创建时间${new Date().toLocaleDateString()}`
      );
      return function () {
        console.log(
          `日志：组件${
            Com.name
          }已经销毁，销毁时间${new Date().toLocaleDateString()}`
        );
      };
    }, []);
    // 一般来讲，传入的组件会作为新组件的视图
    return <Com {...props} />;
  };
}

export default withLog;
