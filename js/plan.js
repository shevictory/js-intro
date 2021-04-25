//+ алерт
//+ Операторы
//+ Унарные, бирнарные, тернарные
//+ Приоритет операций
//+ Number + all other types
//+ Неявное приведение типов
//+ String + all other types
//+ String -* all other types
// >, ... для Number
// >, ... для String
// Строгое/нестрогое равно/неравно
// == for 0 1 true false null undefined 7.2.15 Abstract Equality Comparison
// !!! Не использовать нестрогое

// Условный оператор
// что есть false - набор значений
//+ prompt
const a = prompt("Input string");
console.log('a :>> ', a);
alert(a);
//+ !!! Не использовать let
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