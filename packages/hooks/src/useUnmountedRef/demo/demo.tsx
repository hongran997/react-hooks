import useBoolean from '../../useBoolean';
import useUnmountedRef from '../';
import React, { useEffect } from 'react';
import { message } from 'antd';

function MyComponent() {
  const unmountedRef = useUnmountedRef();

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
