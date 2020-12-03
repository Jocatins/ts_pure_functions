//Function that pass into another function

const myClicker = document.querySelector(".btn");
myClicker.addEventListener("click", () => {
  console.log("hello");
});

// Function that returns other functions

const add = (a: number) => {
  return (b) => {
    return a + b;
  };
};
console.log(add(3)(8));

///////////////////////////////////////////
//  NOT A PURE FUNCTION

const timesRandomNumber = (num: number) => {
  return Math.random() * num;
};
console.log(timesRandomNumber(8));
console.log(timesRandomNumber(8));
console.log(timesRandomNumber(8));
console.log(timesRandomNumber(8));
console.log(timesRandomNumber(8));
console.log(timesRandomNumber(8));

/////////////////////////////////////////////

//  FUNCTION THAT RETURNS FUNCTIONS

const multiply = (a: number) => (b: number) => {
  return a * b;
};

const multiplyRandomNumber = multiply(Math.random());

console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));

//////////////////////ARRAYS

console.log("Arrays");

const arr = [0, 1, 2, 3, 4, 5, 6, 7];

const sum = arr.reduce((num, res) => num + res);
console.log("reduce method => " + sum);

console.log("some method");

const brokenOut = arr.some((num) => {
  if (num < 5) {
    console.log(num);
    return false;
  }
  return true;
});
console.log(brokenOut);

const titans = [
  { name: "Nick", age: 24 },
  { name: "Jenny", age: 22 },
  { name: "Vicky", age: 21 },
  { name: "Salon girl", age: 29 },
];

const names = titans.map((titan) => titan.name);
console.log(names);

const ages = titans
  .map((titan) => titan.age)
  .filter((age) => (age < 24 ? true : false))
  .sort();
console.log(ages);

const multiplyTitans = (a: number, b: number) => a * b;

const productOfTitans = titans.map((titan) => titan.age).reduce(multiplyTitans);

console.log(productOfTitans);
