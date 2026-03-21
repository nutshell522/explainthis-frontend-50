/**
請設計一個 `Calculator` 類別。該類別具有 add(加法)、subtract(減法)、multiply(乘法)、divide(除法) 和 power(次方) 等數學運算功能。同時，還會支援連續操作的方法鍊式 (method chaining)。`Calculator` 類別的建構式會接受一個數字，來作為 `result` 的初始值。

具體來說，`Calculator` 類別應包含以下方法：

- `add` 將給定的數字 `value` 與 `result` 相加，並回傳更新後的 `Calculator` 物件
- `subtract` 從 `result` 中減去給定的數字 `value`，並回傳更新後的 `Calculator` 物件
- `multiply` 將 `result` 乘以給定的數字 `value`，並回傳更新後的 `Calculator` 物件
- `divide` 將 `result` 除以給定的數字 `value`，並回傳更新後的 `Calculator` 物件。如果傳入的值為 `0`，則拋出錯誤 `"Division by zero is not allowed"`
- `power` 計算 `result` 的次方，指數為給定的數字 `value`（result = result ^ value），計算完後回傳更新後的 `Calculator` 物件
- `getResult` 傳回 `result` 的值

範例 1：
new Calculator(10).add(5).subtract(7).getResult() // 8

範例 2：
new Calculator(2).multiply(5).power(2).getResult() // 100
 */

class Calculator {
  constructor(value) {}

  add(value) {}

  subtract(value) {}

  multiply(value) {}

  divide(value) {}

  power(value) {}

  getResult() {}
}
