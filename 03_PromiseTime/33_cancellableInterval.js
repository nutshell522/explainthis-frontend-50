/**
給定一個函式 `fn`、一個參數陣列 `args` 和一個時間間隔 `t`，回傳一個取消函式 `cancelFn`。在經過 `cancelTimeMs` 毫秒的延遲後，將呼叫回傳的取消函式 `cancelFn`（由呼叫端使用 `setTimeout(cancelFn, cancelTimeMs)` 安排）。

函式 `fn` 應立即使用參數 `args` 呼叫，然後每隔 `t` 毫秒呼叫一次，直到 `cancelTimeMs` 毫秒時呼叫 `cancelFn` 為止。

範例
輸入： fn = (x) => x * 2, args = [4], t = 35, cancelT = 190
輸出（概念）：
在 0, 35, 70, 105, 140, 175 ms 各執行一次 fn(4)，皆返回 8；在 190 ms 時取消，之後不再執行。

解釋：
const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);
每隔 35ms 呼叫 fn(4)。直到 t = 190 ms 時呼叫 cancelFn 取消。
 */

var cancellable = function (fn, args, t) {};
