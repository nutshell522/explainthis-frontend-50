/**
在 JavaScript 複製值時，當複製的是非原始型別 (primitive type) 的資料型別時，例如：物件(object)、陣列 (array) 等，會遇到淺拷貝 (shallow copy) 和深拷貝 (deep copy) 的差異。在面試時很常會要你當場手寫深拷貝，也就是手寫 Lodash 常見的 `cloneDeep`。

所謂的深拷貝是指在拷貝時，物件 A 與物件 B 不同，兩者在原型鏈上僅是結構相同，但其屬性實際的地址不同。在拷貝值時，有可能會遇到變數是多層的情境，例如是一個物件裡還有物件，深拷貝的定義會是每一層的值都不會共享參考 (reference)。

具體來說，以 lodash 為例：`clone` 只用於淺拷貝(第一層拷貝)，`cloneDeep` 可用於深拷貝。淺拷貝時外層陣列不同，但內層元素仍與原陣列共享同一個物件參考；深拷貝時連內層物件也都是新建立的實例。

請實作 `cloneDeep`，使巢狀物件與陣列在拷貝後彼此不共享內層參考。
 */

function cloneDeep(item) {}

let objA = {
  a: 1,
  b: { c: 3 },
};

let objB = cloneDeep(objA);

console.log(objA === objB); // false
console.log(objA.b === objB.b); // false
