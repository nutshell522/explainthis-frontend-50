/**
手寫一個 `repeat` 函式，會接受三個參數，包含

- `func`：要重複執行的函式
- `times`：重複執行的次數
- `wait`：每次重複之間的間隔時間

最後 repeat 會返回一個可執行函式，該函式執行時會重複執行 `func` 函式 `times` 次，每次間隔 `wait` 毫秒。

例如：repeat(console.log, 3, 5000) 回傳的函式被呼叫時，會每 5 秒輸出一次傳入的參數，共 3 次。
 */

function repeat(func, times, wait) {}
