/**
 * title: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在count变化时变化
 */
import React, { useState, useRef, useCallback } from 'react';
import useMemoizedFn from '..';
import { message } from 'antd';

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  return (
    <>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </>
  );
});

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    message.info(`Currect count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    message.info(`Currect count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Add Count</button>
      <p>You can click the button to see the number of sub-component renderings</p>

      <div style={{ marginTop: 16 }}>
        <h3>Component with useCallback function:</h3>
        <ExpensiveTree showCount={callbackFn}></ExpensiveTree>
      </div>
      <div style={{ marginTop: 16 }}>
        <h3>Component with useMemoizedFn function:</h3>
        <ExpensiveTree showCount={memoizedFn}></ExpensiveTree>
      </div>
    </>
  );
};
