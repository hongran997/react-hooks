import { useMemo, useRef } from 'react';
import { isFunction } from '../utils/index';
import isDev from '../utils/isDev';

/**
 * noop被定义为一个函数类型，它接受任意数量的参数（...args: any[]），并且返回任何类型的值（=> any）。
 * 你可以将其视为一个通用的、不做任何操作的函数，它可以作为占位符使用，或者用于类型检查。
 */
type noop = (this: any, ...args: any[]) => any;

/**
 *这段代码定义了一个名为PickFunction的类型别名，它接受一个类型参数T，
 *这个类型参数必须是一个函数类型（即满足extends noop的条件）。
 *具体来说：
 *ThisParameterType<T> 表示从类型T中提取出函数的this类型。
 *Parameters<T> 表示从类型T中提取出函数的参数类型列表。
 *ReturnType<T> 表示从类型T中提取出函数的返回值类型。
 *因此，PickFunction<T> 类型的函数接受与类型T相同的this类型、参数类型列表，
 *并返回与类型T相同的返回值类型。这样的函数可以看作是对原始函数的一个包装或转换，但保持了原始函数的行为和签名。
 */
type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;

function useMemoizedFn<T extends noop>(fn: T) {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useMemoizedFn expected parameters is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useRef<T>(fn);

  fnRef.current = useMemo(() => fn, [fn]);

  // TODO
  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current as T;
}

export default useMemoizedFn;

