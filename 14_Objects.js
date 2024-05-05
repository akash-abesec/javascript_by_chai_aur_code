// ===================== Object de- Structures snd JSON API intro=======================

const course ={
    coursename:"js in hindi",
    prince: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course;

console.log(courseInstructor);  // => hitesh
console.log(instructor);  // => hitesh

// ================API intro===============

// {
//     "name": "hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// } 