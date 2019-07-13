// variable and function hoisting in javascript

// hoisting "means" raise (something) by means of ropes and pulleys.

// how javascript does it ??

// declare a function expresssion
//console.log(someFunc(2,3)); // -- >> throws error

var someFunc = function(num1,num2)
{
  return (num1*num2);
}

console.log(someFunc(2,3));

// declare a function
console.log(anotherFunc(4,5)); // doesnot throws error
function anotherFunc(num1,num2) // function declaration
{
  return (num1*num2);
}

console.log(anotherFunc(4,5));

// declare yet another function expression using let 
// keyword
// console.log(yetAnotherFunc(6,7)); // throws error
let yetAnotherFunc = function(num1,num2) /* function expression with let keyword solves problem of 
hoisting*/
{
  return (num1*num2);
}
console.log(yetAnotherFunc(6,7));


// Output -->>

/*
6
20
20
42
*/