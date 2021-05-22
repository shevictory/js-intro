'use strict';
try {
  console.log('try1');
  x = 5;
  console.log('try2');
} catch (e) {
  console.error(e);
} finally {
  console.log('finally :>> ');
}
console.log('after try block');

/********************************************************** */
function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError();
  }
  if (Number.isNaN(n)) {
    return NaN;
  }
  if (!Number.isFinite(n)) {
    throw new RangeError('The number must be a finite number!');
  }
  if (!Number.isSafeInteger(n)) {
    throw new RangeError('The number must be safe integer');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

try {
  console.log('factorial(5) :>>', factorial(5.5));
} catch (e) {
  console.error(e);
  console.log('dfafdsfdsfds');
} finally {
  console.log('ee');
}

console.log('after try');
/********************************************************************** */
// задание
// реализовать обработку ошибок для
/************************************************************ */
function validateValue(v) {
  if (typeof v !== 'number') {
    throw new TypeError('Input value must be an integer value!');
  }
  if (v < 0 || v > 150) {
    throw new RangeError('Input value must be in interval from 0 to 150');
  }
  return v;
}

const inputValue = 5;
try {
  const value = validateValue(inputValue);
} catch (e) {
  if (e instanceof TypeError) {
    alert('Input value must be an integer value!');
  } else if (e instanceof RangeError) {
    alert('Input value must be in interval from 0 to 150');
  }
  throw e;
}

/******************************************************************* */
// пример с возвращаемым значением
function f1() {
  try {
    throw 5;
    return 1;
  } catch (e) {
    throw 55;
    return 2;
  } finally {
    return 3;
  }
}

console.log('f1() :>> ', f1());
/******************************************************* */
