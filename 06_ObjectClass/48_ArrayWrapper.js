/**
實作一個名為 `ArrayWrapper` 的類別，其建構函式會接受一個整數陣列作為參數。該類別應具有以下兩個特性：

- 當使用 `+` 運算子將兩個該類別的實例相加時，結果值為兩個陣列中所有元素的總和。（通常需實作 `valueOf` 或 `[Symbol.toPrimitive]`）
- 當在實例上呼叫 `String()` 或字串轉型時，它會回傳一個由逗號分隔的字串，並且最外面會有中括號括起來，例如 "[1,2,3]"。

範例 1：
輸入： nums = [[1, 2], [3, 4]], operation = "Add"
輸出： 10
解釋： new ArrayWrapper([1, 2]) + new ArrayWrapper([3, 4]) 為 10

範例 2：
輸入： nums = [[23, 98, 42, 70]], operation = "String"
輸出： "[23,98,42,70]"
 */

class ArrayWrapper {
  constructor(nums) {}
}
