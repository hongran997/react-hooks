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

  /**
   * useEffect 接收两个参数：第一个参数是一个函数，这个函数会在组件渲染后执行；
   * 第二个参数是一个数组，这个数组包含了依赖项，当依赖项发生变化时，useEffect 会重新执行。
   *
   * 依赖项是 useEffect 的第二个参数，它是一个数组，包含了组件中使用的变量或函数。当依赖项发生变化时，useEffect 会重新执行。
   *
   * 在某些情况下，你可能需要清除副作用，例如取消定时器或事件监听器。useEffect 提供了一个返回值，可以用于清除副作用
   *
   * 第二个参数传入[], 只在组件挂载和卸载时执行一次
   */
  // 第一种写法
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );

  // 第二种写法
  // useEffect(() => {
  //   return () => {
  //     fnRef.current();
  //   };
  // }, []);

  // 第三种写法
  // useEffect(() => {
  //   const cleanup = () => {
  //     fnRef.current();
  //   };
  //   return cleanup;
  // }, []);

  /**
   * 这三种写法都是等同的，都是在组件卸载时执行 fnRef.current() 函数。
   */
}

export default useUnmount;
