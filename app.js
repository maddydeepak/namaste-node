require("./xyz");
// const { calculateSum } = require("./calculate/sum.js");

// const { calculateMultiply } = require("./calculate/multiply.js");

const { calculateSum, calculateMultiply } = require("./calculate");

//import { calculateSum } from "./sum.js";

var name = "Namaste NodeJS";
var a = 10;
var b = 20;

// console.log(name);
// console.log(a + b);
console.log(globalThis === global);

calculateSum(a, b);
calculateMultiply(a, b);
