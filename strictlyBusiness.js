'use strict';

/*Example1*/
a = 20; // throws error need to define var / let / const
//var a = 10;

console.log(a);

/*Example2*/

var myFunc = function(a,a,b)
{
  console.log(a,a,b);
}

myFunc(1,2,3); // in strict mode throws error >> Duplicate parameter name not allowed in this context


/*Example3*/
delete Object.prototype; // throws error TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

// without strict mode throws false