//===================== Dates =========================

let myDate = new Date();
console.log(myDate);  // => 2024-02-08T04:14:29.527Z
console.log(myDate.toString());  // => Thu Feb 08 2024 09:45:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  // => Thu Feb 08 2024
console.log(myDate.toLocaleString());  // => 8/2/2024, 9:47:44 am
console.log(typeof myDate);  // => object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());  // => Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());  // => 23/1/2023, 5:03:00 am

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString());  // => 14/1/2023, 5:30:00 am

let myCreatedDate3 = new Date("01-14-2023");
console.log(myCreatedDate3.toLocaleString());  // => 14/1/2023, 12:00:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp);  // => 1707366609828  milisecond
console.log(myCreatedDate3.getTime());  //=> 1673634600000 in milisecond

console.log(Math.floor(Date.now()/1000));  // Time in seconds  => 1707366775

let newDate = new Date();
console.log(newDate);  // => 2024-02-08T04:34:54.191Z
console.log(newDate.getMonth());  // => 1
console.log(newDate.getDay());  // => 4

console.log(` ${newDate.getDay()} and the time is ${newDate.getTime()} `);  // => 4 and the time is 1707367079500 

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Time zone in Chipiyana Buzurg, Ghaziabad, Uttar Pradesh (GMT+5:30)Thursday, 8 February 2024, 10:10 am"
})

