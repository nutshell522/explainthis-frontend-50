/**
建立一個 `TimeLimitedCache` 類別，這個類別能讓你取得與設定鍵值對 (key-value pair)，同時能為每個鍵值對設定一個「過期時間」。

具體要實作三個方法：

- set(key, value, duration)：接受一個整數的鍵 `key`、一個整數值 `value`，以及一個毫秒為單位的時間 `duration`。當持續時間結束後，這個鍵值對將不能被存取。如果相同且未過期的鍵存在，則回傳 `true`，若不存在則回傳 `false`。如果這個鍵已經存在，其值與持續時間都應該被新傳入的 `value` 與 `duration` 覆寫。
- get(key)：如果存在未過期的鍵，回傳其對應的值。若沒有相對應的鍵，則回傳 `-1`。
- count()：回傳現存未過期的鍵的總數量。

範例
輸入:
actions = ['TimeLimitedCache', 'set', 'get', 'count', 'get']
values = [[], [1, 42, 100], [1], [], [1]]
timeDelays = [0, 0, 50, 50, 150]

輸出: [null, false, 42, 1, -1]
 */

class TimeLimitedCache {
  constructor() {}
  set(key, value, duration) {}
  get(key) {}
  count() {}
}
