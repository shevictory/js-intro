function f(a, ...args) {
  console.log('a :>> ', a);
  console.log('arguments :>> ', arguments);
  console.log('args :>> ', args);
}

f(2);
f(2, 5, 8, 9, 6, 3, 2);
