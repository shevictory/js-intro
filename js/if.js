// ЗАДАНИЕ на повторение:
// 1. Ввести 3 числа и вывести их сумму

// МОТИВАЦИЯ
// 1. Если совершеннолетний, то одни действия, если нет, то сообщение об ошибке.
// 2. Если пароль введен правильно, то доступ есть, иначе нет.

// if (condition) {
//   operators;
// }

// Простейшее условие true/false и сокащенная форма
const isPermissionDenied = true;
if (isPermissionDenied) {
  console.log('Permission denied(');
}

// Простейшее условие true/false и полная форма
const isPermissionDenied1 = true;
if (isPermissionDenied1) {
  console.log('Permission denied(');
} else {
  console.log('Have fun! You are lacky)');
}

// + Операции сравнения
// < <= > >= (== != плохой тон) === !==
const age = 22;
if (age <= 18) {
  console.log('Sorry, but you have no permission to access this content(');
} else {
  console.log('Have fun! You are lacky)');
}

// ЗАДАНИЕ: ввести пароль, если он совпадает, вывести сообщение о наличии доступа, иначе об отсутствии
// РЕШЕНИЕ
const password = prompt("Enter password:");
if (password === 'qwerty') {
  console.log('The password is correct');
 } else {
  console.log('The password is not correct');
 }

