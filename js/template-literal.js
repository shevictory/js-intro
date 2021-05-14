const TRY_LIMIT = 5;
const CORRECT_PASSWORD = '1';
let tryCount = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt('Enter password') === CORRECT_PASSWORD;
  if (isPasswordCorrect) {
    break;
  }
} while (tryCount++ < TRY_LIMIT);

alert(`Password is ${isPasswordCorrect ? 'correct' : 'incorrect'}`);
const h = 5;
