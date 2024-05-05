// ========= if =========
const temperature = 41;
const isUserloggedIn = true;

// if (temperature === 40){
//     console.log("less than 50");
// } else{
//     console.log("temperature is greater than 50");
// }

// if ( 2 == "2"){
//     console.log("Executed");
// }  => 

// if ( 2 === "2"){
//     console.log("Executed");
// }  => Executed

// if ( 2 != 3 ){
//     console.log("Executed");
// } // => Executed

// <, >, <=, >=, ==, !=, ===, !==  // 

// const score = 200;

// if (score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");
// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log(" less than 1200");
// }

const UserloggedIn = true;
const debitcard = true;
const loogedInFromGoogle = false;
const logedInFromEmail = false;

// if (UserloggedIn && debitcard && 2==2 ){
//     console.log("Allow to buy course");
// }

// if (loogedInFromGoogle || logedInFromEmail){
//     console.log("User logged in");
// }

//===================== Switch Case ===================//

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

//==================== Truthy or Falsy values ====================//

// const userEmail = "h@hitesh.ai";

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values => "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj = {};

// if (Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// } 

// ============ Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// let val2 = null ?? 10;
// val3 = undefined ?? 15;
val4 = null ?? 10 ?? 20;


// console.log(val1);  // => 5
// console.log(val2);  // => 10
// console.log(val3);  // => 15
// console.log(val4);  // => 10



//================= Terniary Operator ===============//

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("maore than 80");