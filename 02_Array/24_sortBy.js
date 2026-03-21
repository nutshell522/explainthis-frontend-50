/**
給定一個陣列 `arr` 和一個函式 `fn`，回傳一個排序後的陣列 `sortedArr`。可以假設 `fn` 只回傳數字，而這些數字決定了 `sortedArr` 的排序順序。`sortedArr` 必須按照 `fn` 的輸出值升冪排序。

可以假設對於給定的陣列，`fn` 不會傳回重複的數字。

範例 1
輸入： arr = [5, 4, 1, 2, 3], fn = (x) => x
輸出： [1, 2, 3, 4, 5]

範例 2
輸入： arr = [{ x: 1 }, { x: 0 }, { x: -1 }], fn = (d) => d.x
輸出： [{ x: -1 }, { x: 0 }, { x: 1 }]
 */

function sortBy(arr, fn) {}

console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); // [1, 2, 3, 4, 5]

console.log(
  sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x)
); // [{ x: -1 }, { x: 0 }, { x: 1 }]
