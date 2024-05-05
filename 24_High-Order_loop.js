//============= High Order Array Loop ===============//

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// ============ Maps ================//

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject1 = {  //  myObject is not iterable
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key, value] of myObject1) {
    console.log(key, ':-', value);
}


// ============== for in =============//
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(programming[key]);
}


const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India");

for (const key in map1) {
    console.log(key);
}


// =============== for each loop ============== //

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) =>{
    console.log(item,index, arr);
} )

const myCoding = [
    {
        laguageName : "javascript",
        languageFileName :"js"
    },
    {
        laguageName : "java",
        languageFileName :"java"
    },
    {
        laguageName : "python",
        languageFileName :"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.laguageName);
})