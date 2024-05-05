// Stack (Primitive) :- Copied value used.
// Heap (Non-Primitive) :-Reference or original value used.

let myYoutubename = "hiteshchoudharydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename); // => hiteshchoudharydotcom
console.log(anothername);  // => chaiaurcode

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

console.log(userOne.email); // => user@gmail.com
console.log(userTwo.email); // => user@gmail.com