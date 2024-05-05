// Primitive :-
// 7 Types :- String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.34;

const isLoggedIn = false;
const outsideTemp = null;
let useEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // => false

const bigNumber = 234152451234121234n;

// Reference (Non primitive) :-
//Array, Object, Functions

const heros = ["shaktiman", "nagraj", "doge"];

let myObj = {
    name :"Akash",
    age : 234,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // => function
console.log(typeof bigNumber); // => bigint
console.log(typeof outsideTemp); // => object
console.log(typeof scoreValue); // => number
console.log(typeof heros); // => object
console.log(typeof anotherId); // => symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3