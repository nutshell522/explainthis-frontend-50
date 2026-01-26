/**
你正在開發一個處理數值資料的系統。請寫一個名為 `clamp` 的函式，它需要三個參數：

- 一個數值 `number`
- 一個最小值 `lower`
- 一個最大值 `upper`

此函式應確保輸出的 `number` 始終落在指定的範圍内，包括最小值和最大值本身。你會如何實作這個 `clamp` 呢?
 */

// 解題思路 : 取中間值，number與最小取其大，接著與最大取其小。
const clamp = (number, lower, upper) => Math.min(Math.max(number, lower), upper);

// 在範圍中，返回原值
console.log(clamp(7, 0, 9)); // => 7

// 小於 lower，返回 lower
console.log(clamp(-12, -4, 5)); // => -4

// 大於 upper，返回 upper
console.log(clamp(18, 3, 9)); // => 9
