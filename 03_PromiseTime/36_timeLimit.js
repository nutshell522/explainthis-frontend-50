/**
給定一個非同步函式 `fn` 和一個時間限制 `t`（以毫秒為單位），回傳一個具有時間限制（time limited）版本的函式。 `fn` 會接受具有時間限制函式所傳入的參數。

這個具有時間限制的函式要符合以下條件：

- 如果 `fn` 在 `t` 毫秒的時間限制內完成，則具有時間限制的函式應該解析（resolve）為 `fn` 的結果。
- 如果 `fn` 的執行時間超過了時間限制，則具有時間限制的函式應該拒絕（reject），並返回字串 `"Time Limit Exceeded"`。

範例
輸入:
fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
inputs = [5];
t = 50

輸出: {"rejected":"Time Limit Exceeded","time":50}

解說:
原本傳入的 Promise 在 100 毫秒後會解析，但時間限制是 50 毫秒，所以在 t=50 毫秒時，Promise 被拒絕。
 */

var timeLimit = function (fn, t) {};
