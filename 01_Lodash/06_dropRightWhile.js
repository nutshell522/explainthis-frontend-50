/**
請實作一個名為 dropRightWhile 的函式，該函式接收兩個參數。第一個參數是一個陣列；第二個參數是一個 predicate 函式，用於指定條件。 
dropRightWhile 函式會從陣列的末端開始遍歷，移除符合指定條件的元素，直到遇到不符合條件的元素為止。然後，它會回傳剩餘的元素所組成的新陣列，同時確保原始陣列保持不變。
 */
function dropRightWhile(array, predicate) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i])) {
      return array.slice(0, i + 1);
    }
  }
  return [];
}

// 範例一
console.log(
  dropRightWhile(
    ['hello', 'world', 'today', 'isGood'],
    (value) => value.length > 5
  )
);
// => ['hello', 'world', 'today']

// 範例二
console.log(
  dropRightWhile(
    [
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 20 },
      { name: 'Bob', age: 30 },
    ],
    (obj) => obj.age > 25
  )
);
// => [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// 範例三
console.log(dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10));
// => [10, 20, 30, 40, 50, 10]

// 範例四
console.log(dropRightWhile([1], (value) => value > 0));
// => []
