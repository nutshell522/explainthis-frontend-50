/**
請實作 `Array.prototype.at`，該方法會接受一個整數作為輸入，並從陣列中檢索相應元素。除了正整數外，也要能夠處理負整數，負整數會從陣列末尾計算。以下為使用範例
 */

Array.prototype.at = function (index) {};

const arr = ['Explain', 'This'];

console.log(arr.at(0)); // Explain
console.log(arr.at(1)); // This
console.log(arr.at(2)); // undefined

console.log(arr.at(-1)); // This
console.log(arr.at(-2)); // Explain
console.log(arr.at(-3)); // undefined
