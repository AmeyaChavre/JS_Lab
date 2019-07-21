console.log(900.9 === (300.3 * 3));

var a = 900.0;
var b = 300.3 * 3;
console.log(a);
console.log(b);
console.log(a===b); 
/* Output :
false
900
900.9000000000001
false
*/

// @Method1

console.log(Number(b.toFixed(1)));
console.log(typeof(Number(b.toFixed(1))));

// @Method2

console.log(Number(b.toPrecision(4)));
console.log(typeof(Number(b.toPrecision(4))));

// @Method3

console.log(b);

console.log(((300.3 * 10)*3)/(10));

console.log(typeof(((300.3 * 10)*3)/(10)));

/*@Output:
false
900
900.9000000000001
false
900.9
number
900.9
number
900.9000000000001
900.9
number
*/