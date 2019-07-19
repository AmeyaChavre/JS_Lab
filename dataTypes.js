// @DataTypes in JavaScript


console.log(typeof(null)); // null is of type object
console.log(typeof(undefined)); // undefined is of the undefined
console.log(typeof({})); // function is of the type object
console.log(typeof([])); // array is of the type object

/*@Output
object
undefined
object
object
*/

// How to determine if some datatype is array

var someArray = ['a','e','i','o','u'];

console.log(Array.isArray(someArray));


// if it returns true then its a array

/*@Output
object
undefined
object
object
true
*/

console.log(Array.isArray({}));

// if it returns false then its a array

/*@Output
object
undefined
object
object
true
false
*/


//@ A yet another method to determine array

console.log([] instanceof(Array));