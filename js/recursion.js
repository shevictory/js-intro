/**
 * logged numbers example
 */
numberCount = 5;
console.log(`logger(${numberCount}) :>> `, logger(numberCount));

function logger(number) {
  if (number > 0) {
    // console.log('number :>> ', number);
    logger(--number);
    // return true;
  }
  // return undefined;
}

/**
 * array filler example
 */
console.log('arrayFiller(numberCount) :>> ', arrayFiller(numberCount));

function arrayFiller(numberCount) {
  const numbers = [];
  return pushItem(numberCount);

  function pushItem(number) {
    // const numbers = [];
    if (number > 0) {
      numbers.push(number);
      pushItem(--number);
      return numbers;
    }
  }
}

/**
 * parentheses
 */
console.log('generateParenthesesString(3) :>> ', generateParenthesesString(3));

// function generateParenthesesString(parenthesesNumber) {
//   if (parenthesesNumber > 0) {
//     return `(${generateParenthesesString(--parenthesesNumber)})`;
//   }
//   return '';
// }

function generateParenthesesString(parenthesesNumber) {
  if (parenthesesNumber >= 1) {
    return parenthesesNumber === 1
      ? `()`
      : `(${generateParenthesesString(--parenthesesNumber)})`;
  }
  // return false;
}

console.log(
  'generateParenthesesArray(4) :>> ',
  generateParenthesesArray(4).toString().replace(/,/g, '')
);

function generateParenthesesArray(parenthesesNumber) {
  const parentheses = [];
  pushParenthesesCouple(parenthesesNumber);
  return parentheses;

  function pushParenthesesCouple(parenthesesNumber) {
    if (parenthesesNumber > 0) {
      parentheses.push('(');
      pushParenthesesCouple(--parenthesesNumber);
      parentheses.push(')');
    }
  }
}

/**
 * pow
 */
console.log('pow(2,-2) :>> ', pow(2, -2));

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return exponent < 0
    ? 1 / pow(base, -exponent)
    : base * pow(base, exponent - 1);
}

// function pow(base, power) {
//   if (power > 1) {
//     return base * pow(base, power - 1);
//   }
//   return 1;
// }

/**
 * arrayFlat()
 */

const testArr = [0, 0, [1, 1], , , 0, [1, [2, [3]], 1], 0];
console.log('testArr :>> ', testArr);
console.log('flat array natural:>> ', testArr.flat(Infinity));
console.log('flat array custom:>> ', arrayFlat(testArr, Infinity));

function arrayFlat(arr, depth = 1) {
  let resultArray = [];
  if (depth === 0) {
    return arr;
  }
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArray = resultArray.concat(arrayFlat(arr[i], depth - 1));
    } else if (arr[i] !== 'undefined') {
      resultArray = resultArray.concat(arr[i]);
    }
  }
  return resultArray;
}

/**
 * factorial
 */

console.log('fact(5) :>> ', fact(5));
function fact(number) {
  if (number === 0) {
    return 1;
  }
  return number * fact(number - 1);
}
