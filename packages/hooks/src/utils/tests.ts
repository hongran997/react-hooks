import { StrictMode } from 'react';
import { renderHook } from '@testing-library/react';

export * from '@testing-library/react';

/**
 *
 * 该代码定义了一个自定义渲染函数 customRender，它包装了 @testing-library/react 中的 renderHook 函数。
 * 它根据环境变量 REACT_DOM 的值来有条件地设置一个 Wrapper 组件，如果值为 'strict'，则设置为 StrictMode，否则为 undefined。
 * customRender 函数随后调用 renderHook 函数，传入提供的 ui 和 options，并添加 Wrapper 组件作为包装选项。
 * 最后，它将 customRender 导出为 renderHook，有效地覆盖了原始的 renderHook 函数。
 *
 * + {} 代表函数， 不加 {}  代表类型
 *
 * console.log(typeof renderHook); // function
 *
 * 写法一： const customRender: typeof renderHook
 * 写法二： const customRender: function
 *
 * 写法一可以保留 renderHook 的所有类型信息，这样可以更好地利用 TypeScript 的类型检查和自动完成功能。
 * 写法二则是一个通用的函数类型，可能会导致类型检查和自动完成功能不够准确。
 *
 * TODO
 * @param ui
 * @param options
 * @returns
 */

const Wrapper = process.env.REACT_DOM === 'strict' ? StrictMode : undefined;
const customRender: typeof renderHook = (ui, options) =>
  renderHook(ui, { wrapper: Wrapper, ...options });

/**
 * as 重命名
 */
export { customRender as renderHook };
