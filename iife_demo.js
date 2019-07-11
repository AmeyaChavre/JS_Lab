// Implement an IIFE -->> Used to protect scope of function and variables declared in it , can be found in JQuery


// Step1 : Write a Function

function addTwoNumbers(){
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
}

// Step2 : Change it to named function expression

(function addTwoNumbers(){
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
})

// above is named function expression


// Step3: Remove name as it's supposed to be anonymous

// making it anonymous

(function (){
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
})


// Step4: Add () to make IIFE


(function (){
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
}) ();

// IIFE implemented