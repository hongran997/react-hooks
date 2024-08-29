/**
 * title: 基础用法
 * desc: 切换boolean, 可以接受默认值
 */

import React from 'react';
import useBoolean from '../index';

export default () => {
  const [state, { toggle, setFalse, setTrue }] = useBoolean(true);
  return (
    <>
      <p>Effects: {JSON.stringify(state)}</p>
      <button type="button" onClick={toggle}>
        Toggle
      </button>
      <button type="button" onClick={setFalse} style={{ margin: '0 16px' }}>
        Set False
      </button>
      <button type="button" onClick={setTrue}>
        Set True
      </button>
    </>
  );
};
