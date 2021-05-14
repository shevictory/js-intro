const obj1 = { name: 'John' };
const obj2 = new Object({ name: 'John' });

const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

const familyMembers = {
  Anton: {
    age: 25,
    gender: 'male',
  },
  Anna: {
    age: 23,
    gender: 'female',
  },
};

// console.log(
//   "familyMembers[prompt('Whos info are you unterested?')] :>> ",
//   familyMembers[prompt('Whos info are you unterested?')]
// );

// console.log("familyMembers['Anton'] :>> ", familyMembers['Anton']);

const myArr = {
  _kkk: 44,
  $jnjk: 55,
  true: 33,
  '55n': 555,
  0: 11,
  1: 22,
  2: 33,
  length: 3,
};

const arr3 = [
  'sdfsdf',
  4,
  true,
  function f() {},
  Symbol(),
  Array(4),
  new Array(2),
  Array(1, 2, 3, 4, 5),
  new Array(1, 2, 4),
  555n,
  { name: 'Difjfd' },
  null,
  undefined,
];

// prototype
// motivation
// function MyArray() {
//   this.length = 0;
//   this.push = function (item) {
//     this[this.length] = item;
//     return ++this.length;
//   };
// }

// const myArr1 = new MyArray();
// const myArr2 = new MyArray();
// demo
function MyArray() {
  this.length = 0;
}
const myArrayProto = new MyArray();

myArrayProto.push = function (item) {
  this[this.length] = item;
  return ++this.length;
};

MyArray.prototype = myArrayProto;
const myArr1 = new MyArray();
const myArr2 = new MyArray();

const arr4 = [];
arr4.push(1, 2, 3, 4, 5);
let arr5 = [];
arr5 = arr4.map(function (current, index, arr) {
  return current * 2;
});
