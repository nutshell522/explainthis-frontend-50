/**
給定兩個 Promise，分別為 `promise1` 和 `promise2`，這兩個 Promise 都會實現 (resolve) 一個數字。請實作一個函式，接收兩個 Promises 後，回傳一個新的 Promise，回傳的新 Promise 會是這兩個 Promise 實現值的和。

範例一：
輸入:
promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20)),
promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60))
輸出: 7
解釋: 這兩個輸入 Promise 分別實現為 2 和 5。返回的 Promise 應該實現為 2 + 5 = 7。本題不判斷返回 Promise 實現的時間。

範例二：
輸入:
promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50)),
promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30))
輸出: -2
解釋: 這兩個輸入 Promise 分別實現成 10 和 -12。返回的 Promise 應該實現成 10 + -12 = -2。
 */

var addTwoPromises = async function (promise1, promise2) {};
