const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values);  // undefined


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newNums0 = myNums.filter( (num) => num > 4 )
console.log(newNums0);   // [ 5, 6, 7, 8, 9, 10 ]
console.log(newNums0);  // [ 5, 6, 7, 8, 9, 10 ]



const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums);  // [ 5, 6, 7, 8, 9, 10 ]



const newNums1 = []

myNums.forEach ( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

console.log(newNums1);  // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);

const userBook = books.filter( (bk) => bk.publish >= 2000 )
console.log(userBook);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = myNumbers.map( (num) => { return  num +10 } );
console.log(newNum);

// ============== chaining ============//

const newNumber = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 ) 
                .filter( (num) => num >=40 )
console.log(newNumber);


// ============== Reduce =================//

const mynums = [1, 2, 3];
const myTotal = mynums.reduce(function (acc, currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval;
}, 0)

const myTotal1 = mynums.reduce( (acc, curr) => acc+curr, 0 )
console.log(myTotal1);


const shoppingCart = [
    {
        item: "js course",
        price: 2999
    },
    {
        item: "py course",
        price: 999
    },
    {
        item: "cpp course",
        price: 2696
    },
    {
        item: "ruby course",
        price: 3999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(priceToPay);