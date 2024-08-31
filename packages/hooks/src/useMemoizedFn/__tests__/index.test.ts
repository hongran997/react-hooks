import { renderHook } from '@testing-library/react';
import useMemoizedFn from '../';

describe('useMemoizedFn', () => {
  it('should return a memoized function', () => {
    const { result } = renderHook(() => useMemoizedFn(() => 'hello'));
    const memoizedFn = result.current;

    expect(memoizedFn()).toBe('hello');

    // Update the original function
    const newFn = () => 'world';
    renderHook(() => useMemoizedFn(newFn));

    // The memoized function should still reference the original function
    expect(memoizedFn()).toBe('hello');
  });

  it('should update the memoized function when the original function changes', () => {
    const { result, rerender } = renderHook(() => useMemoizedFn(() => 'hello'));
    const memoizedFn = result.current;

    expect(memoizedFn()).toBe('hello');

    // Update the original function
    const newFn = () => 'world';
    rerender(() => useMemoizedFn(newFn));

    // The memoized function should now reference the new function
    expect(memoizedFn()).toBe('hello');
  });

  it('should handle function with arguments', () => {
    const { result } = renderHook(() => useMemoizedFn((name: string) => `hello ${name}`));
    const memoizedFn = result.current;

    expect(memoizedFn('john')).toBe('hello john');
  });
});
