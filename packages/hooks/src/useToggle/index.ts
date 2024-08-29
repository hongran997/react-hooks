import { useMemo, useState } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

/**
 * 定义了一个名为useToggle的泛型函数，接受两个参数：defaultValue和reverseValue。
 * defaultValue的类型为D，默认值为false；reverseValue的类型为R，它是一个可选参数。
 *
 * defaultValue被强制转换为unknown类型，然后再断言为D类型。
 * 这种转换可能是为了确保defaultValue的类型与泛型参数D相匹配
 * @param defaultValue
 * @param reverseValue
 * @returns
 */
function useToggle<D, R>(defaultValue: D = (false as unknown) as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  /**
   * useMemo 是 React 的一个 Hook，它的作用是对传入的函数进行记忆化处理，避免不必要的重新计算。
   * 当依赖项数组中的值发生变化时，useMemo 才会重新执行传入的函数并返回新的结果。
   * 这样可以提高性能，特别是在处理复杂计算或大型数据集时。
   */
  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
