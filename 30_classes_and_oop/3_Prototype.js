let myName = "hitesh    ";
let channel = "chai    ";

console.log(myName.trueLength);

let myHeros = ["thor", "SPIDERMAN"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

heroPower.hitesh()  // => hitesh is present in all objects
myHeros.hitesh()  // => hitesh is present in all objects
myHeros.heyHitesh()  // => Hitesh says hello
heroPower.heyHitesh()

//------------------ inheritance --------------------//

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "Chaiaurcode    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()