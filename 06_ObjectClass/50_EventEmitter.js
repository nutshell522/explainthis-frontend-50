/**
設計一個 EventEmitter 類別。

這個類別應該與 Node.js 或 DOM 中的 Event Target 類似，其中包含訂閱事件以及發送事件兩個方法。

本題要實作的兩個方法如下：

- **subscribe** — 接受事件名稱（字串）以及一個回呼函式（callback function）。當事件被發送時，該回呼函式會被呼叫。一個事件可以註冊多個監聽器（listener）。當發送帶有多個回呼函式的事件時，每個回呼函式都會按照訂閱順序進行呼叫，並且應返回一個結果陣列。可以假設傳遞給 `subscribe` 的回呼函式皆不相同。`subscribe` 方法還會回傳一個帶有 `unsubscribe` 方法的物件，當呼叫它時，會從訂閱列表中刪除該回呼函式，並返回 undefined。

- **emit** — 接受事件名稱（字串）以及一個可選的參數陣列，這些參數會被傳遞給回呼函式。如果沒有訂閱給定事件的回呼函式，則返回一個空陣列。否則，返回按訂閱順序存下的所有回呼函式回傳的結果陣列。

範例（概念）：
const emitter = new EventEmitter();
emitter.emit('firstEvent'); // []
emitter.subscribe('firstEvent', function cb1() { return 5; });
emitter.subscribe('firstEvent', function cb2() { return 6; });
emitter.emit('firstEvent'); // [5, 6]
 */

class EventEmitter {
  subscribe(eventName, callback) {}
  emit(eventName, args) {}
}
