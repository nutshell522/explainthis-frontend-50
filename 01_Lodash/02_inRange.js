/**
 請實作一個函式 `inRange` 。此函式接受三個參數：

- `value`：要檢查的數值
- `start`：範圍的下限 (範圍包含 `start`)，預設為 0
- `end`：範圍的上限 (範圍不包含 `end`)

在實作時，要同時考量以下條件：

- 預設行為：如果僅提供兩個參數，則第二個參數被視為 `end`，而 `start` 此時預設為 0，這樣會讓使用該函式的人，在正數範圍內能更簡易地使用
- 負數範圍：如果 `start` 大於 `end`，`inRange` 會交換參數以正確處理負數範圍，確保在正負數都能被處理
- 輸出：`inRange` 函式輸出會是一個 `Boolean`
 */

// * 版本 1
// const inRange = (value, start, end = undefined) => {
//   if (end === undefined) {
//     if (start >= 0) {
//       return value >= 0 && value < start;
//     } else {
//       return inRange(value, start, 0);
//     }
//   } else {
//     if (start <= end) {
//       return value >= start && value < end;
//     } else {
//       return inRange(value, end, start);
//     }
//   }
// };

// * 版本2
// const inRange = (value, start, end = undefined) => {
//   const trueStart = end != undefined ? Math.min(start, end) : Math.min(start, 0);
//   const trueEnd = end != undefined ? Math.max(start, end) : Math.max(start, 0);

//   return value >= trueStart && value < trueEnd;
// };

// * 版本3
const inRange = (value, start, end = 0) => {
  return value >= Math.min(start, end) && value < Math.max(start, end);
};

console.log(inRange(3, 2, 4)); // => true
console.log(inRange(4, 8)); // => true
console.log(inRange(4, 2)); // => false
console.log(inRange(2, 2)); // => false
console.log(inRange(1.2, 2)); // => true
