/**
想像你正在開發一個需要追蹤各種指標的功能。我們需要在程式碼中，用彈性的方式管理計數器。你的任務是設計一個名為 `createCounter` 的函式，可用於生成具有特定起始值的客製化計數器。

`createCounter` 將返回一個具有以下方法的物件：

- `get()`：返回計數器的當前值。
- `increment()`：將計數器值增加 1 並返回更新後的值。
- `decrement()`：將計數器值減少 1 並返回更新後的值。
- `reset()`：將計數器重置回其初始值。

參考流程：createCounter(4) 後依序 get、increment、increment、get、reset、decrement 應得到 4、5、6、6、4、3。
 */

function createCounter(initialValue = 0) {}
