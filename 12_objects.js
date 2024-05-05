// singleton
// Object.create

// objects literals

const mtSym = Symbol("keys1");


const JsUser = {
    name : "Hitesh",
    "fullname" : "Hitesh choudhary",
    age:18,
    [mtSym]: "mykeys1",
    location:"Jaipur",
    email:"hitesh@gamil.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(JsUser.email);  // => hitesh@gamil.com
console.log(JsUser["email"]);  // => hitesh@gamil.com
console.log(JsUser["fullname"]);  // => Hitesh choudhary
console.log(JsUser[mtSym]);  // => mykeys1

JsUser.email = "hitesh@gamil.com";
Object.freeze(JsUser);
JsUser.email = "hitesh@gamil.com";
console.log(JsUser);  // => {name: 'Hitesh',fullname: 'Hitesh choudhary',age: 18,
// location: 'Jaipur',email: 'hitesh@gamil.com',
// isLoggedIn: false,lastLoginDays: [ 'Monday', 'Saturday' ],[Symbol(keys1)]: 'mykeys1'}

JsUser.greeting = function(){
    console.log("Hello JS user");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  
}

console.log(JsUser.greeting());  // => Hello JS user
console.log(JsUser.greetingTwo());  // => Hello JS user, Hitesh