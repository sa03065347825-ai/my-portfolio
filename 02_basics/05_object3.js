//***********OBJECT DESTRUCTURE AND JSON( js object notation) API ******************
// object destructing means shortcut to extract value from object and stored it in a variable
const courses = {
    courseName:"Chai aur code",
    coursePrice: 999,
    courseinstructor:"Hitesh"
}
// console.log(courses.courseName);
const {courseinstructor : instruct} = courses
// console.log(instructor);
console.log(instruct);



//API :  Apna gham kise aur(api) k sar pr dalna hhhhhhh

//E.g :  hum jb kise restuarant ma jata hain k pizza lao to baki unka kam ha ka kitchen ma kis tara banata hain ya aur kya kartay hain to matlb ya sara gham hum API k sar pr daltay hain
//e.g : ya hum jb kuch search kartay hain google pa to humara kam sirf us cheez sa hota ha baki sara kam API Kartay hain ka us cheez ko kis tara lata hain


// JSON OBJECT
// {
//     "name":"sami",
//     "age": 22,
//     "religion":"islam"
// }

// //JSON ARRAY : collection of object
// [
//     {},
//     {},
//     {}
// ]



// most API send data in JSON format

//JSON = language of data
//API = delivery system
// JSON → what's inside the box
// API → how the box reaches you