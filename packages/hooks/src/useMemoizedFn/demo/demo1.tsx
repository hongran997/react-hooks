/**
 * title: 基础用法
 * desc: useMemorizedFn 与 useCallback 可以实现同样的效果
 */

import React, { useState, useCallback } from 'react';
import useMemoizedFn from '../index';
import { message } from 'antd';

export default () => {
  const [count, setCount] = useState(0);

  const callCallbackFn = useCallback(() => {
    message.info(`Currect count is ${count}`);
  }, [count]);

  const callMemoizedFn = useMemoizedFn(() => {
    message.info(`Currect count is ${count}`);
  });

  return (
    <div>
      <div>count: {count}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Add Count
      </button>
      <div>
        <button onClick={callCallbackFn}>call callbackFn</button>
        <button onClick={callMemoizedFn} style={{ margin: '8px 8px' }}>
          call memoizedFn
        </button>
      </div>
    </div>
  );
};
