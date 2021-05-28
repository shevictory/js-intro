'use strict';

console.group('Sandbox');

// class A {
//   constructor(a) {
//     this.a = a;
//   }
// }
// class B {
//   constructor(a) {
//     this.__proto__ = Object.create(A.__proto__);
//   }
// }

function f() {
  //console.log('arguments :>> ', arguments);
}

f(5, 6, 9);

console.groupEnd();
