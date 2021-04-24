let undefinedValue = undefined;
console.log('undefinedValue :>> ', undefinedValue);
console.log('typeof undefinedValue:>> ', typeof undefinedValue);

let nullValue = null;
console.log('nullValue :>> ', nullValue);
console.log('typeof nullValue:>> ', typeof nullValue); // Object

let booleanValue = true;
console.log('booleanValue :>> ', booleanValue);
console.log('typeof booleanValue:>> ', typeof booleanValue);

let stringValue = "My name is Viktoriia";
console.log('stringValue :>> ', stringValue);
console.log('typeof stringValue:>> ', typeof stringValue);

let numberValue = 7;
console.log('numberValue :>> ', numberValue);
console.log('typeof numberValue:>> ', typeof numberValue);

let symbolValue = Symbol();
console.log('symbolValue :>> ', symbolValue);
console.log('typeof symbolValue:>> ', typeof symbolValue);

// алерт
// Операторы
// Унарные, бирнарные, тернарные
// Приоритет операций
// Number + all other types
// Неявное приведение типов
// String + all other types
// String -* all other types
// >, ... для Number
// >, ... для String
// Строгое/нестрогое равно/неравно
// == for 0 1 true false null undefined 7.2.15 Abstract Equality Comparison
// !!! Не использовать нестрогое

// Условный оператор
// что есть false - набор значений
// prompt
const a = prompt("Input string");
console.log('a :>> ', a);
alert(a);
// !!! Не использовать let
// Приведение введенной строки к числу
const inputValue = prompt();
const x = 555;
const inputNumberValue = inputValue - 0;
if (inputNumberValue > 10) {
  const a = false;
  alert("a = "+ a)
  const x = 997;
  alert(x);
} else {
  const b = true;
  alert("b = "+ b)
}
// && || , ?: (таблица истинности)

// Область видимости (внутри нее имена уникальны)
// Дебаггер

// Подводка к циклам: 5 раз одно и то же
// Циклы
// while
// break
// Задача: ввести 5 раз пароль, если не ввел правильно - ошибка