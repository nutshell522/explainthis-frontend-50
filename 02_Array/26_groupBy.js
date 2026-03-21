/**
請實作一個陣列操作的方法 `groupBy`，該方法會讓任何陣列呼叫 `array.groupBy(fn)` 時，獲得該陣列分組後的結果。

所謂的陣列分組，是指陣列中的每個鍵都是 `fn(arr[i])` 的輸出，輸出的物件中，含有原始陣列中具有該鍵的所有項。

提供的回呼函式 `fn` 會接受陣列中的項目並傳回一個字串類型的鍵。每個值陣列的順序，會與陣列中元素出現的順序相同。任何順序的鍵都是可以接受的。
 */

Array.prototype.groupBy = function (fn) {};

const input = [{ id: '1' }, { id: '1' }, { id: 2 }];

const out = input.groupBy(function (item) {
  return item.id;
});

console.log(out);
// => { "1": [{ id: "1" }, { id: "1" }], "2": [{ id: 2 }] }
