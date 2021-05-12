function sayHelloTo(name) {
  console.log('Hello, ', name);
}
 
sayHelloTo('qwerty');
sayHelloTo('nnn')
/************************************************ */
/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {null|[number,number]} equation roots
 */
function solveSquareEquation(a, b, c) {
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return null;
  }
  if (d === 0) {
    const x = -b / (2 * a);
    return [x, x];
  }
  const x1 = -b + Math.sqrt(d) / (2 * a);
  const x2 = -b - Math.sqrt(d) / (2 * a);
  return [x1, x2];
}
/**************************************************** */
function sum() {
  console.log('arguments :>> ', arguments);
  let sum = 0;
  for (let item of arguments) {
sum += item
  }
  return sum
}

console.log('sum(1, 5) :>> ', sum(0,6));
sum(1, 5)
/********************************************************** */
// function isEven(value) {
//   return value % 2 === 0;
// }

// const inputValue = +prompt();

// if (isNaN(inputValue)) {
//   console.log('Bad Value :>> ');
// } else {
//   const isEvenResult = isEven(inputValue)? 'even' : 'not even'
// console.log('The number', inputValue, 'is', isEvenResult);
// }
/************************************** */
// OBJECTS!!!
/************************************ */
// function exression
const a = function(param1) {
  return 1;
}

const b = function bFunc(param1) {
  if (param1 <= 0) return 1;
  return param1 * bFunc(param1 - 1)
}
/******************************************* */
// функция высшего порядка
/**
 * 
 * @param {function} f 
 */
const sayHello2 = function(f) {
  f('Hello')
}

sayHello2(console.log)
sayHello2(console.error)
// sayHello2(confirm)
// sayHello2(alert)
// sayHello2(prompt)