// variable and function hoisting in javascript

// hoisting "means" raise (something) by means of ropes and pulleys.

// how javascript does it ??

// declare a variable
console.log(someVar);
var someVar = 10;
console.log(someVar);

// Output >> 
/*
undefined
10
*/

// declare a variable 
//console.log(anotherVar); // unless commented will throw error
let anotherVar = 20; // let keyword resolves the problem
console.log(anotherVar); // of hoisting

/*
undefined
10
20
*/