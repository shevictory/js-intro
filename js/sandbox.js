"use strict";
//========carrieng
// const a1 = (b) => (c) => b + c;
// // debugger;
// console.log(`a1(5)(6)`, a1(5)(6));
// const a2 = function (b) {
//   return function (c) {
//     return b + c;
//   };
// };
// console.log(`a2(5)(6)`, a2(5)(6));

// const sum = (op1, op2) => op1 + op2;
// const mult = (op1, op2) => op1 * op2;
// const opAB = (op) => (a, b) => op(a, b);
// const sumAB = opAB(sum);
// const multAB = opAB(mult);

//========fetch
const url = "./../dbEmul.json";

// fetch(url)
//   .then((data) => data.json())
//   .then((user) => console.log(`user`, user))
//   .catch((e) => console.error(e));

(async function () {
  const user = await getUser(url);
  console.log(`user anonymus`, user);
})();
const user = getUser(url);
console.log(`user`, user);
async function getUser(url) {
  const userData = await fetch(url);
  const user = await userData.json();
  console.log(`userData`, user);
  return user;
}
