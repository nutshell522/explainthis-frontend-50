/**
實作 `fill` 函式，此函式接收四個參數：

- 一個陣列
- 要替換的 `value`
- `start` 索引
- `end` 索引

該函式會從 `start` 到 `end` 索引 (包含 `start` 但不包含 `end`) 來把陣列的元素換成 `value` 。如果未提供 `start` 索引，則應預設為 0。如果未提供 `end` 索引，則剩餘元素會被替換為 `value`。
 */

function fill(array, value, start = 0, end = array.length) {
  const length = array.length;
  let finalStart =
    start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
  let finalEnd = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

  return array.map((item, index) => {
    return index >= finalStart && index < finalEnd ? value : item;
  });
}

console.log(fill([1, 2, 3], '*')); // => ['*', '*', '*']

console.log(fill([1, 2], '*', 2, 3)); // => [1, 2]

console.log(fill([1, 2, 3, 4, 5], '*', 1, -1)); // => [1, '*', '*', '*', 5]

console.log(fill([1, 2, 3], '*', -5, 5)); // 期待：['*', '*', '*'] (start 應校正為 0, end 應校正為 3)

console.log(fill([1, 2, 3], '*', 2, 1)); // 期待：[1, 2, 3] (start > end 時不應替換)
