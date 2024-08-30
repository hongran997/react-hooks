---
nav:
  path: /hooks
---

# useUnmountedRef

获取当前组件是否已经卸载的 Hook。

## 代码演示

<code src="./demo/demo.tsx"></code>

### 基础用法

## API

```
const unmountedRef: {current: boolean}= useUnmountedRef()
```

### Result

| 参数         | 说明               | 类型                |
| ------------ | ------------------ | ------------------- |
| unmountedRef | 组件是否已经被卸载 | { current: boolean} |
