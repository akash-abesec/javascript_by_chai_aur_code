// ========== This and arrow function in javascript ==========//
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()  // => hitesh, welcome to website
user.username = "sam";
user.welcomeMessage();  // => sam , welcome to website

console.log(this); 

function chai(){
    let username = "hitesh";
    console.log(this.username);
}
chai()

const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}
chai()

// const addTwo = (num1, num2) => {
    return num1 + num2;
// }
// const addTwo = (num1, num2) => (num1 + num2);
const addTwo = (num1, num2) => ( {username: "hitesh"});

console.log(addTwo(3, 4));  // => 7


const myArray = [2, 4, 45, 4, 7];

myArray.forEach()