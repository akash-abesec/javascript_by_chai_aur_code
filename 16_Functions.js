//================== Functions with objects and array in javascript=====================

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));  // => [ 500, 2000 ]

const user = {
    username : "hitesh",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)  // => Username is hitesh and price is 199
handleObject(user)  // => Username is hitesh and price is undefined
handleObject({
    username : "sam",
    price : 305
})  // => Username is sam and price is 305

const myNewArray = [200, 300, 400, 5000]

function returnSecondValues(getArray){
    return getArray[1]
}

console.log(returnSecondValues([100, 200, 300, 400]));

