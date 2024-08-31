import useBoolean from '../../useBoolean';
import useUnmountedRef from '../';
import React, { useEffect } from 'react';
import { message } from 'antd';

function MyComponent() {
  const unmountedRef = useUnmountedRef();

  /**
   * 父组件的渲染函数和 useEffect 先于子组件执行。
   * 同级组件之间，按照在代码中的顺序依次执行。
   * 同一组件内的多个 useEffect 按照在代码中的顺序依次执行。
   */
  useEffect(() => {
    setTimeout(() => {
      if (!unmountedRef.currect) {
        message.info('component is alive');
      }
    }, 2000);
  }, []);

  return <p>hello world</p>;
}

export default () => {
  const [state, { toggle }] = useBoolean(true);
  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
