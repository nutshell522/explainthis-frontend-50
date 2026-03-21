/**
為了幫助開發人員測試程式碼，你需要撰寫一個 `expect` 的函式。該函式可以接受任何值 `val`，並返回一個包含以下兩個功能的物件：

- `toBe(val)` 接受另一個值，如果這兩個值相等（即 `===`），則返回 `true`。如果不相等，則會拋出一個錯誤訊息 "Not Equal"。
- `notToBe(val)` 接受另一個值，如果這兩個值不相等（即 `!==`），則返回 `true`。如果相等，則會拋出一個錯誤訊息 "Equal"。

範例一
輸入: func = () => expect(5).toBe(5)
輸出: {"value": true}

範例二
輸入: func = () => expect(5).toBe(null)
輸出: {"error": "Not Equal"}
 */

var expect = function (val) {};
