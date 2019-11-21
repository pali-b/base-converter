const reader = require("readline-sync");
const converter = require("./converter");
const num = reader.questionInt("What is the number you want to convert = ");

console.log(converter.convertToBinary(num));

console.log(converter.convertToHexadecimal(num));
