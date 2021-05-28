'use strict';

console.group('Symbol');

const s1 = Symbol();
console.log('s1 :>> ', s1);
const s2 = Symbol(55);
console.log('s2 :>> ', s2);
const s3 = Symbol('dsfsdfd');
console.log('s3 :>> ', s3);
/**
 * Sumbol as object
 */
const a = Symbol('77');

const obj = {
  1: 645,
  sdfsdf: 'dfsdfs',
  dsfdsf555: 'dsdfdsf454',
  [a]: 'symbologogo',
};

console.log('obj :>> ', obj);
console.log('Object.keys(obj) :>> ', Object.keys(obj));
console.log('obj[a] :>> ', obj[a]);
/********************************************************************************************* */
/**
 * Symbol.iterator
 */
const arr = [0, 1, 2, 3, 4, 5, 6];
// const iter = arr[Symbol.iterator]();
// console.log('iter.next() :>> ', iter.next());

const arrIter = arr[Symbol.iterator]();
let arrIterCurrent = arrIter.next();
while (!arrIterCurrent.done) {
  console.log('arrIterCurrent.value :>> ', arrIterCurrent.value);
  arrIterCurrent = arrIter.next();
}
/**
 * for of
 */
for (const item of arr) {
  console.log('item :>> ', item);
}

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  [Symbol.iterator] = function () {
    let current = this.from;
    return {
      next: () => {
        if (current <= this.to) {
          return { done: false, value: current++ };
        }
        return { done: true };
      },
    };
  };
}
const range = new Range(5, 10);
console.log('range[Symbol.iterator]() :>> ', range[Symbol.iterator]());
for (const item of range) {
  console.log('item of range :>> ', item);
}
/**
 * Array.from() - array from iterable collection or pseudoarray
 */
const arrFromIterableRange = Array.from(range);
console.log('arrFromIterableRange :>> ', arrFromIterableRange);
const arrFromPseudoArray = Array.from({ 0: 1, 1: 2, 2: 3, length: 3 });
console.log('arrFromPseudoArray :>> ', arrFromPseudoArray);

/**
 * MyArray
 */

// class MyArray {
//   constructor() {
//     this.length = 0;
//     for (const item of arguments) {
//       this[this.length++] = item;
//     }
//   }
//   [Symbol.iterator]() {
//     let current = 0;
//     return {
//       next: () => {
//         return {
//           done: !(current < this.length),
//           value: this[current++],
//         };
//       },
//     };
//   }
// }

// console.table(Array.from(new MyArray(1, 2, 3, 9, 8, 7)));

// const myArr1 = new MyArray(1, 2, 3, 6, 5, 4);
// for (const item of myArr1) {
//   console.log('item of myArr1 :>> ', item);
// }

// const arrNew = [true, ...[1, 2, 3, 4, 8, 6], ...myArr1];
// console.table(arrNew);
/**
 * MyArray with iterator in proto
 */

class MyArrayIterator {
  constructor(myArray) {
    this._myArray = myArray;
    this._currentIndex = 0;
  }
  next() {
    if (this._currentIndex >= this._myArray.length) {
      return {
        done: true,
      };
    }
    return {
      done: false,
      value: this._myArray[this._currentIndex++],
    };
  }
}

class MyArray {
  constructor() {
    this.length = 0;
    for (const item of arguments) {
      this[this.length++] = item;
    }
  }
  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
}

console.table(Array.from(new MyArray(1, 2, 3, 9, 8, 7)));

const myArr1 = new MyArray(1, 2, 3, 6, 5, 4);
for (const item of myArr1) {
  console.log('item of myArr1 :>> ', item);
}

const arrNew = [true, ...[1, 2, 3, 4, 8, 6], ...myArr1];
console.table(arrNew);

/**
 * Оператор распределения (spread syntax) - applied to iterable collections
 */
/**
 * 1
 */
function sum(first, ...args) {
  let result = first;
  for (const item of args) {
    result += item;
  }
  return result;
}

const numbers = [1, 2, 3, 5, 4, 5, 5, 5, 455, 4, 5, 6, 85, 4, 266];

const numbersSum = sum(...numbers);
console.log('numbersSum :>> ', numbersSum);

/**
 * 2
 */

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];
const arr3 = arr1.concat(arr2); // only from arrays
console.log('arr3 :>> ', arr3);
const arr4 = [...arr1, ...arr2]; // array from any iterable collection
console.log('arr4 :>> ', arr4);

console.groupEnd();
