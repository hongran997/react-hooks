/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */

import React from 'react';
import useUnmount from '../index';
import { message } from 'antd';
import useBoolean from '../../useBoolean';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean();

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
