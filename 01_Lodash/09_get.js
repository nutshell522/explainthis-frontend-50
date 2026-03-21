/**
實作一個 `get` 效用函式。它接收三個參數

- 一個物件
- 某個路徑
- 預設值

而此函式最後會返回路徑的值；如果該路徑不存在於給定的物件，則返回預設值。透過例子會比較好理解：
 */

function get(object, pathParam, defaultValue) {}

const object = { a: [{ b: { c: 3 } }] };

console.log(get(object, 'a[0].b.c')); // => 3

console.log(get(object, 'a[0][b][c]')); // => 3

console.log(get(object, 'a[100].b.c', 'default')); // => 'default'
