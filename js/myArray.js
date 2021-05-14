function MyArray() {
  this.length = 0;
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

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
console.log('myArr1.push(1, 2, 3, 4):>> ', myArr1.push(1, 2, 3, 4));
console.log(myArr1);

console.log('myArr1.push(1, 2, 3, 4):>> ', myArr1.push(1, 2, 3, 4));
console.log(myArr1);

console.log('myArr1.shift():>> ', myArr1.shift());
console.log(myArr1);

console.log('myArr1.pop() :>> ', myArr1.pop());
console.log(myArr1);
