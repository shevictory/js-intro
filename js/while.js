// МОТИВАЦИЯ
// Вывести на консоль алгоритм построения квадрата

console.log('Пройти прямо 5 см');
console.log('Повернуть направо на 90 градусов');
console.log('Пройти прямо 5 см');
console.log('Повернуть направо на 90 градусов');
console.log('Пройти прямо 5 см');
console.log('Повернуть направо на 90 градусов');
console.log('Пройти прямо 5 см');
console.log('Повернуть направо на 90 градусов');

// Debagger
console.log('Using while loop:');
let i = 1;
while (i <= 4) {
  console.log('Пройти прямо 5 см');
  console.log('Повернуть направо на 90 градусов');
  i= i + 1;
}

// ТЕРМИНЫ: тело цикла, итерация

// ПРИМЕР: Алгоритм чтения книги

const pagesCount = 5;

// let currentPageNumber = 1;
// while (currentPageNumber <= pagesCount) {
//   console.log('Read page number', currentPageNumber);
//   currentPageNumber = currentPageNumber + 1;
// }

let currentPageNumber = 1;
while (currentPageNumber <= pagesCount) {
  console.log('Read page number', currentPageNumber++);
}

// ЗАДАЧА: Вывести числа 2 4 6 8 10



// ЗАДАЧА: Проверить корректность введенного пароль. Пользователь имеет 3 попытки
// РЕШЕНИЕ
const attemptsCount = 3;
let currentAttemptNumber = 0;
let isPasswordCorrect = false;
while (currentAttemptNumber++ < attemptsCount) {
  isPasswordCorrect = prompt("Enter password:") === 'qwerty';
  if (isPasswordCorrect ) {
    break;
   }  
}

alert((isPasswordCorrect ? 'Good' : 'Bad') + ' password');

//do..while
// Запрашивать у пользователя число от 1 до 10, пока не угодает
do {
} while (+prompt('Enter number from 1 to 10:') !== 7)
console.log('Huray! \u{1F600} You were right!!!');