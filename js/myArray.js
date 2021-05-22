function MyArray() {
  this.length = arguments.length;
  for (let key in arguments) {
    this[key] = arguments[key];
  }
}

const myArrayProto = new MyArray();

myArrayProto.push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length++] = arguments[i];
  }
  return this.length;
};

myArrayProto.shift = function () {
  if (this.length === 0) {
    return;
  }

  const firstItem = this[0];

  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }

  delete this[--this.length];

  return firstItem;
};

myArrayProto.pop = function () {
  if (this.length === 0) {
    return;
  }
  const lastItem = this[this.length - 1];
  delete this[--this.length];
  return lastItem;
};

// myArrayProto.flat = function (depth = 1) {
//   let resultArray = [];
//   if (depth === 0) {
//     return this;
//   }
//   // debugger;
//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i])) {
//       resultArray = resultArray.concat(arrayFlat(this[i], depth - 1));
//     } else if (this[i] !== 'undefined') {
//       resultArray = resultArray.concat(this[i]);
//     }
//   }
//   return resultArray;
// };

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray(0, 9, 6);
console.log('myArr1:>> ', myArr1);
console.log('myArr1.push(1, 2, 3, 4):>> ', myArr1.push(1, 2, 3, 4));
console.log(myArr1);

console.log('myArr1.push(1, 2, 3, 4):>> ', myArr1.push(1, 2, 3, 4));
console.log(myArr1);

console.log('myArr1.shift():>> ', myArr1.shift());
console.log(myArr1);

console.log('myArr1.pop() :>> ', myArr1.pop());
console.log(myArr1);

// const myArr2 = new MyArray(
//   0,
//   0,
//   new MyArray(1, 1),
//   0,
//   new MyArray(1, new MyArray(2, new MyArray(3)), 1)
// );
// console.log('myArr2:>> ', myArr2);
// console.log('myArr2.flat(Infinity) :>> ', myArr2.flat(Infinity));
