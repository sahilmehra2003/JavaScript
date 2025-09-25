Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
}

//function declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// function expression
const subtract = function () {
    return a - b;
}

// arrow function
const multiply = (a, b) => a * b;

// first class function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x * y);
console.log(result)

greet.describe();

greet('Sahil');

//! if i remove the semicolon after greet i will get errror TypeError: greet(...) is not a function as iffy will get call so i will be like greet('Sahil')(function () {
//! console.log("Iffy called"); }) () thats why we need semicolon after function declaration
 
// * iffy function gets immediately  called after function declaration
(function () {
    console.log("Iffy called");
})();
