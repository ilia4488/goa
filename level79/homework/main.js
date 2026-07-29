const { add, subtract, Calculator } = require("./calculator.js");


console.log("მიმატება:", add(10, 5));
console.log("გამოკლება:", subtract(10, 5));


const calc = new Calculator(10, 5);
console.log("გამრავლება:", calc.multiply());
const { add, subtract, Calculator } = require("./calculator.js");
