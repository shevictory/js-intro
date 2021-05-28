'use srtict';

console.group('String');

const str = 'String11';
for (const char of str) {
  console.log('char :>> ', char);
}
console.log('str :>> ');
console.dir(new String(str));

console.groupEnd();
