

let salaries=[4344, 4344,4334 ,4343,7555,6777,8777];

let array = salaries.filter(function(value) {
    return value < 6000; });

console.log(array);


let salary=[7555,6777,8777,6000,455,432,311,111];

let array1 = salary.find(function(value) {
    return value < 6000; });

console.log(array1);


let str = "neosoft";  
console.log(str.slice(0,3)); 

// let str1 = "neosofttech"; 
console.log(str.slice(-4)); 

// let numbers = [4344, 4344,4334 ,4343,7555,6777,8777];

// let positive_array = numbers.filter(function(value) {
//     return value >= 0; });

// console.log(positive_array);

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(fruits.slice(1, 3));
let digit = [3,43,22,11,54,33,34,11,21,23,45];

console.log(digit.slice(1, 5));