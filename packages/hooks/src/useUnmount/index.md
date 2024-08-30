---
nav:
  path: /hooks
---

# useUnmount

在组件卸载（unmount）时执行的 hook

## 代码演示

### 基础用法

<code src="./demo/index.tsx"></code>

## API

```
useUnmount(fn: () => void);
```

### Params

| 参数 | 说明                 | 类型       | 默认值 |
| ---- | -------------------- | ---------- | ------ |
| fn   | 组件卸载时执行的函数 | () => void | -      |
