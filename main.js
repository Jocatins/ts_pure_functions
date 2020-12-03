//Function that pass into another function
var myClicker = document.querySelector(".btn");
myClicker.addEventListener("click", function () {
    console.log("hello");
});
// Function that returns other functions
var add = function (a) {
    return function (b) {
        return a + b;
    };
};
console.log(add(3)(8));
///////////////////////////////////////////
//  NOT A PURE FUNCTION
var timesRandomNumber = function (num) {
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
var multiply = function (a) { return function (b) {
    return a * b;
}; };
var multiplyRandomNumber = multiply(Math.random());
console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));
console.log(multiplyRandomNumber(5));
//////////////////////ARRAYS
console.log("Arrays");
var arr = [0, 1, 2, 3, 4, 5, 6, 7];
var sum = arr.reduce(function (num, res) { return num + res; });
console.log("reduce method => " + sum);
console.log("some method");
var brokenOut = arr.some(function (num) {
    if (num < 5) {
        console.log(num);
        return false;
    }
    return true;
});
console.log(brokenOut);
var titans = [
    { name: "Nick", age: 24 },
    { name: "Jenny", age: 22 },
    { name: "Vicky", age: 21 },
    { name: "Salon girl", age: 29 },
];
var names = titans.map(function (titan) { return titan.name; });
console.log(names);
var ages = titans
    .map(function (titan) { return titan.age; })
    .filter(function (age) { return (age < 24 ? true : false); })
    .sort();
console.log(ages);
var multiplyTitans = function (a, b) { return a * b; };
var productOfTitans = titans.map(function (titan) { return titan.age; }).reduce(multiplyTitans);
console.log(productOfTitans);
