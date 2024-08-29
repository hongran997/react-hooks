---
nav:
  path: /hooks
---

# useBoolean

优雅的管理 boolean 状态的 Hook

## 代码演示

<code src="./demo/index.tsx"></code>

### 基础用法

## API

```
const [state, {setTrue, setFalse, set, toggle}] = useBoolean(defaultValue ?: boolean)
```

### Params

| 参数         | 说明                      | 类型      | 默认值  |
| ------------ | ------------------------- | --------- | ------- |
| defaultValue | 可选项， 传入默认的状态值 | `boolean` | `false` |

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明         | 类型                       |
| -------- | ------------ | -------------------------- |
| setTrue  | 设置为 true  | `() => void`               |
| setFalse | 设置为 false | `() => void`               |
| set      | 设置 state   | `(value: boolean) => void` |
| toggle   | 切换 state   | `() => void`               |
