function f(name1) {
  const name = name1;
  return function f1() {
    return name;
  };
}
function f11(a) {
  return 5 + a;
}
// debugger;
// const c1 = f11(2);
// const a1 = f('nnn');
// const b1 = f('sdfsdfsdfd');
// console.log('a1() :>> ', a1());
