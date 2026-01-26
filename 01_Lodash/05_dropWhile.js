/**
請實作一個 dropWhile 函式。此函式接受兩個參數，第一個是參數是一個陣列，它可以是任何類型的陣列；第二個是一個 predicate 函式，會接受陣列中的元素，如果返回為真，則表示該元素應該被丟棄，直到返回的不為真則停止。
 */
function dropWhile(array, predicate) {}

// 範例一
console.log(dropWhile([1, 2, 3, 4], (n) => n < 3)); // [3, 4]

// 範例二
console.log(dropWhile([1, 2, 3, 4], (n) => n > 0)); // [1, 2, 3, 4]

// 範例三
console.log(dropWhile([1, 6, 3, 4], (n) => n < 3)); // [6, 3, 4]
