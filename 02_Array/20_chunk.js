/**
Lodash 的 `chunk` 是開發中經常被用的效用函式，也經常會在面試被問到。 `chunk` 能將輸入的陣列分割成指定長度的小組。並輸出一個新的陣列，包含原始陣列的元素，並按指定的 `size` 分組成子陣列。
 */

function chunk(array, size) {}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 3;

const chunkedArray = chunk(originalArray, chunkSize);
console.log(chunkedArray);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
