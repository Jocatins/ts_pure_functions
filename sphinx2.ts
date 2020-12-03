//NORMAL
// const start = 0;
// const end = 100;

// let sum = 0;
// for (let i = start; i < end; i++) {
//   sum += i;
// }

// console.log(sum);

//FUNCTIONAL WAY | TERNARY AND RECURSION
const sum = (start: number, end: number) => {
  if (start === end) return 0;
  return start + sum(start + 1, end);
};
console.log(sum(0, 100));
