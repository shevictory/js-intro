'use strict';

const obj = { a: 1, b: 2, c: 3, 1: 100, [Symbol()]: 99 };

const obj2 = { a2: 5, b2: 6 };
obj2.__proto__ = obj;

//===== Object.prototype methods ==========================
// hasOwnProperty (true - если свое, а не унаследованое свойство)
console.log('obj.hasOwnProperty("a") :>> ', obj.hasOwnProperty('a'));
console.log('obj2.hasOwnProperty("a") :>> ', obj2.hasOwnProperty('a'));
console.log('obj2.hasOwnProperty("a2") :>> ', obj2.hasOwnProperty('a2'));

// isPrototypeOf
console.log(
  'HTMLElement.prototype.isPrototypeOf(document.createElement("div")) :>> ',
  HTMLElement.prototype.isPrototypeOf(document.createElement('div'))
);
console.log('obj.isPrototypeOf(obj2) :>> ', obj.isPrototypeOf(obj2));

// propertyIsEnumerable
const arr = [1, 2, 3, 4, 5, 6];
console.log(
  'arr.propertyIsEnumerable("1") :>> ',
  arr.propertyIsEnumerable('1')
);
console.log(
  'arr.propertyIsEnumerable("length") :>> ',
  arr.propertyIsEnumerable('length')
);
// for..in + prototype chain properties
for (const i in obj) {
  console.log(`obj[${i}] = ${obj[i]}`);
}
// Object.keys(obj) - only own properties
console.log('Object.keys(obj) :>> ', Object.keys(obj));

// bad Practice
for (const i in arr) {
  console.log(`arr[${i}] = ${arr[i]}`);
}

// toLocaleString

obj.__proto__.toString = function () {
  let string = '';
  for (const i in this) {
    string += `${i}: ${this[i]}, `;
  }
  return string;
};
console.log('obj.toLocaleString() :>> ', obj.toLocaleString());
console.log('object.toString() :>> ', obj.toString());

// valueOf
const numberObject = new Number(5);
console.log('numberObject :>> ', numberObject);
console.log('numberObject.valueOf() :>> ', numberObject.valueOf());
console.log('obj.valueOf() :>> ', obj.valueOf());

//===== Object static methods ======================================================

// defineProperty()
Object.defineProperty(obj, 'b', {
  value: 255,
  configurable: true,
  enumerable: false,
});
Object.defineProperty(obj, 'd', {
  value: 2559, // data descriptor
  writable: false, // data descriptor
  // configurable: true, // common descriptor
  // enumerable: true,  // common descriptor
});
console.log('Object.keys(obj) :>> ', Object.keys(obj));
for (const i in obj) {
  console.log('i :>> ', i, obj[i]);
}
console.log('obj.b :>> ', obj.b);

// obj.d = 10; // read only property 'd'
// console.log('obj.d :>> ', obj.d);

Object.defineProperty(obj, '_e', {
  value: 'e3', // data descriptor
  writable: true, // data descriptor
  configurable: true, // common descriptor
  enumerable: true, // common descriptor
});

Object.defineProperty(obj, 'e', {
  set: function (v) {
    this._e = v;
  }, // access descriptor
  get: function () {
    return this._e;
  }, // access descriptor
  configurable: true, // common descriptor
  enumerable: true, // common descriptor
});

obj.e = 'new e';
console.log('obj.e :>> ', obj.e);

// defineProperties()
// getOwnPropertyDescriptor()
// getOwnPropertyDescriptors()

// getOwnPropertyNames()

console.log('Object.keys(obj) :>> ', Object.keys(obj)); // own enumerable
console.log(
  'Object.getOwnPropertyNames(obj) :>> ',
  Object.getOwnPropertyNames(obj)
); // own enumerable+non enumerable

// getPrototypeOf() // setPrototypeOf()
console.log(
  'Object.getPrototypeOf(document.createElement("div")) :>> ',
  Object.getPrototypeOf(document.createElement('div'))
);

// freeze() - не расширяемый (preventExtensions()) + configurable+writable -> false
// = seal + writable: true
// isFrozen() - не расширяемый + не конфигурируемые незаписываемые свойства

console.log(
  'Object.getOwnPropertyDescriptors() :>> ',
  Object.getOwnPropertyDescriptors(obj)
);
Object.freeze(obj); //
// console.log('obj :>> ', obj);
// obj.a = 555;
// console.log('obj :>> ', obj);
console.log(
  'Object.getOwnPropertyDescriptors() :>> ',
  Object.getOwnPropertyDescriptors(obj)
);

// preventExtensions() - свойства не добавляются
// isExtensible() - preventExtensions() или seal() или freeze().

// seal() - запечатывает: preventExtensions() + configurable: false
// isSealed() - свойства
// ------------ не добавляются (preventExtensions()),
// ------------ не настраиваются (configurable: false)
// ------------ не удаляются (configurable: false)
