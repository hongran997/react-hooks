import { StrictMode } from 'react';
import { renderHook } from '@testing-library/react';

export * from '@testing-library/react';

const Wrapper = process.env.REACT_DOM === 'strict' ? StrictMode : undefined;

// + {} 代表函数， 不加 {}  代表类型
// TODO
const customRender: typeof renderHook = (ui, options) =>
  renderHook(ui, { wrapper: Wrapper, ...options });

export { customRender as renderHook };
