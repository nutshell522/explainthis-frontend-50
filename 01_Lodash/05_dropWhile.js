/**
請實作一個 dropWhile 函式。此函式接受兩個參數，第一個是參數是一個陣列，它可以是任何類型的陣列；第二個是一個 predicate 函式，會接受陣列中的元素，如果返回為真，則表示該元素應該被丟棄，直到返回的不為真則停止。
 */
function dropWhile(array, predicate) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      break;
    }
    index++;
  }
  console.log(index);
  return array.slice(index);
}

// 範例一
console.log(dropWhile([1, 2, 3, 4, 5, 6], (value) => value < 4)); // => [4, 5, 6]

// 範例二
console.log(dropWhile([0, 1, 2], (value) => value < 5)); // => []

// 範例三
console.log(dropWhile([0, 6, 1, 2], (value) => value < 5)); // => [6, 1, 2]
