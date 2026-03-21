/**
給定一個非同步函式陣列 `functions`，陣列中的每個函式都不接受任何參數，並且每個函式都會回傳一個 Promise，且所有 Promise 都應並行執行。該函式最終會回傳一個 `promise`。

該 `promise` 的解析 (resolve) 條件：

- 當 `functions` 中返回的所有 Promise 都成功並行解析時，該函式回傳的 `promise` 會解析。`promise` 的解析值應為一個陣列，其中包含與 `functions` 中的順序相同的已解析值。當陣列中的所有非同步函式並行執行完成後，`promise` 才解析。

`promise` 的拒絕 (reject) 情況：

- 當 `functions` 中返回的任何 Promise 被拒絕時。`promise` 也應以第一個拒絕的原因拒絕。

備註：回傳的解析值不需帶有時間，且此題不得使用 JavaScript 內建的 `Promise.all` 函式來解。

範例一
輸入：functions = [() => new Promise((resolve) => setTimeout(() => resolve(5), 200))]
輸出：{"t": 200, "resolved": [5]}

範例二
輸入：functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
  () =>
    new Promise((resolve, reject) => setTimeout(() => reject('Error'), 100)),
]
輸出：{"t": 100, "rejected": "Error"}

範例三
輸入: functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]
輸出: {"t": 150, "resolved": [4, 10, 16]}
 */

var promiseAll = async function (functions) {};
