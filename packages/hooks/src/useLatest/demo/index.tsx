/**
 * title: 基础用法
 * desc: useLatest 返回的永远都是最新值
 */

import React, { useState, useEffect } from 'react';
import useLatest from '../index';

export default () => {
  const [count, setCount] = useState(0);

  // TODO
  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval); // TODO: 如果添加了这段代码，会在组件卸载之后删除定时器。否则，定时器继续运行
  }, []);

  return (
    <>
      <p>count: {count}</p>
    </>
  );
};
