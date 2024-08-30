import { useEffect } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils/index';
import isDev from '../utils/isDev';

function useUnmount(fn) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    // TODO 如果是两个箭头函数，只会在卸载时执行一次
    () => () => {
      fnRef.current();
    },
    [],
  );
  // 第二个参数传入[], 只在组件挂载和卸载时执行一次
}

export default useUnmount;
