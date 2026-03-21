/**
請實作一個 `isEqual` 函式，此函式會執行深比較。深比較是用來比較兩個不同的物件是否有相同的值。
 */

function isEqual(value, other) {}

const object = { a: 1, b: [2, 3] };
const other = { a: 1, b: [2, 3] };

console.log(isEqual(object, other)); // => true
