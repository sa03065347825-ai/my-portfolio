const  score = 400
//console.log(score);


const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));  // mostly used in E commerce website ,it added two digit after point 


const otherNumber = 223.893;
//console.log(otherNumber.toPrecision(3)); // it precise the number and also round off the number

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// +++++++++++ MATH +++++++++++++++

//console.log(Math);
// console.log(Math.abs(-4)); // it is absolute value it always return positive

// console.log(Math.round(4.7));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(100));
// console.log(Math.min(1,2,3,4,5))
// console.log(Math.max(1,2,3,4,5))
// console.log(Math.pow(2,3));



console.log(Math.random())
console.log((Math.random() *10) +1)
console.log(Math.floor(Math.random() *10) +1)

//  Find a random number between 10 and 20
const min = 10
const max = 20

let a = Math.floor(Math.random() *10 + min)  // we know that Math.random aloways give number between 0 and 1,so we multiply 10 with it  so it will become more than 1 but still less than 10 so then we add min value to it that so it will alway
// s randomly btw 10 and 20
console.log(a)




