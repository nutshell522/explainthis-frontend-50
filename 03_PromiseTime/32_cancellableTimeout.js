/**
給定一個函式 `fn`、一個參數陣列 `args` 和一個以毫秒為單位的超時時間 `t`，回傳一個取消函式 `cancelFn`。在 `cancelTimeMs` 的延遲後會呼叫 `cancelFn`（由呼叫端使用 `setTimeout(cancelFn, cancelTimeMs)` 安排）。

最開始，函式 `fn` 的執行應該延遲 `t` 毫秒。如果在 `t` 毫秒的延遲之前呼叫了函式 `cancelFn`，它應該取消 `fn` 的延遲執行。如果在指定的延遲 `t` 內沒有呼叫 `cancelFn`，則應執行 `fn`，並使用提供的 `args` 作為參數。

範例一
輸入： fn = (x) => x * 5, args = [2], t = 20
輸出： [{"time": 20, "returned": 10}]
解釋：
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);
fn(2) 在 20 毫秒時執行，而取消操作在這之後，延遲 cancelTimeMs（50 毫秒）後才被呼叫。

範例二
輸入： fn = (x) => x ** 2, args = [2], t = 100
輸出： []
解釋：
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x ** 2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);
因為取消函式在 50 毫秒時就被呼叫，所以在 100 毫秒時才會被執行的 fn(2) 不會被呼叫。
 */

var cancellable = function (fn, args, t) {};
