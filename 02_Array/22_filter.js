/**
給定一個整數陣列 `arr` 和一個過濾函式 `fn`，回傳一個過濾後的陣列 `filteredArr`。

函式 `fn` 接受一個或兩個參數：

- `arr[i]` 是來自 `arr` 的數字
- `i` 是 `arr[i]` 的索引

`filteredArr` 應該只包含來自 `arr` 的元素，其中表達式 `fn(arr[i], i)` 評估為真值。真值是指 `Boolean(value)` 返回 `true` 的值。此題不得使用 JavaScript 內建的 `Array.filter` 方法來解。

範例一
輸入: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
輸出: [20,30]

範例二
輸入: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
輸出: [1]
 */

var filter = function (arr, fn) {};

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
); // [20, 30]

console.log(
  filter([1, 2, 3], function firstIndex(n, i) {
    return i === 0;
  })
); // [1]
