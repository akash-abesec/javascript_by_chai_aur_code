/* ------ ooP In JavaScript ------ */
/* ------ object literals ------ */

const user = {
    username: "akash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Get user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


/* ---------------- Constructor function(new) ----------------- */


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userone = new User("hitesh", 12, true)
const userTwo = new User("chaiaurcode", 10, false)
console.log(userone.constructor);
// console.log(userTwo);

