// ============= Global and local scope ==============
// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    console.log("INNER", a);
}

console.log(a);
console.log(b);
console.log(c);

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    console.log(website);

    two()  // => hitesh

}

// one()

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website);  // => hitesh youtube
    }
    console.log(website);
}

console.log(username);

// ================= interesting ==================

addone(5)

function addone(num) {
    return num + 1;
}

// addTwo(5)  // we cannot use the function before use 
const addTwo = function (num) {
    return num + 2
}
