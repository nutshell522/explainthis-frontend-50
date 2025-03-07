/**
 請實作一個 compact 效用函式。 compact 能將輸入的陣列中的 false、null、0、空字串、undefined 和 NaN 都去除，並輸出一個新的陣列。請實作此 compact 函式。
 */
const compact = (arr) => arr.filter(Boolean);

// 範例一
console.log(compact([0, 1, false, 2, '', 3, 'hello']));
// => [1, 2, 3, 'hello']

// 範例二
console.log(compact([null, undefined, NaN, ' ']));
// =>[' ']

// 範例三
console.log(compact([{ name: 'Alice' }, null, { age: 30 }, undefined]));
// =>[{ name: 'Alice' }, { age: 30 }]
