/**
給定一個物件或陣列 `obj`，傳回一個精簡物件 (compact object)。精簡物件與原始物件相同，只是會將包含偽值 (falsy) 的鍵移除。此操作適用於物件及其巢狀物件 (nested object)。

陣列會被當作索引作為鍵的物件，當 `Boolean(value)` 傳回 `false` 時，該索引的值會被視為偽值。

你可以假設 `obj` 是 `JSON.parse` 輸出的結果。換句話說，它是有效的 JSON。

範例 1：
輸入： obj = [null, 0, false, 1]
輸出： [1]
解釋：陣列中的所有偽值已移除。

範例 2：
輸入： obj = { a: null, b: [false, 1] }
輸出： { b: [1] }
解釋：obj["a"] 和 obj["b"][0] 包含偽值，因此被移除。
 */

var compactObject = function (obj) {};
