'use strict';
// частные случаи: один агрумент без скобок и ретарн велью без скобок
// отличия: this, arguments

const obj = {
  a: 2,
  b: function (params) {
    console.log('this :>> ', this);
  },
  c: params => {
    console.log('this :>> ', this);
  },
};

console.log('obj.a :>> ', obj.a);
console.log('obj.  b :>> ', obj.b());
console.log('obj.c :>> ', obj.c());

function f(params) {
  console.log('this f :>> ', this);
}
f();

console.log('this glob :>> ', this);
