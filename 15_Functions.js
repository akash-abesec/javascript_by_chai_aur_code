function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2); 
}
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result 
    return number1 + number2;
}
const result = addTwoNumbers(2, 5);
console.log("result :",result);  // => 7

addTwoNumbers(3, 4)  // => 7
addTwoNumbers(3, "4")  // =>34
addTwoNumbers(3, "a")  // => 3a
addTwoNumbers(3, null)  // => 3

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log( loginUserMessage("hitesh"));  // => hitesh just logged in
console.log( loginUserMessage());  

