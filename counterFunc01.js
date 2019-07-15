// keeping track function calls using closures

function someFunc()
{
  let count = 0;
  return function(){
    ++count;
    return count;
  }
}

// creating an instance of function someFunc()

const instOne = someFunc();
const instTwo = someFunc();

console.log("first instance",instOne());
console.log("first instance",instOne());
console.log("second instance",instTwo());
console.log("second instance",instTwo());
console.log("first instance",instOne());
console.log("first instance",instOne());
console.log("second instance",instTwo());
console.log("first instance",instOne());
console.log("second instance",instTwo());
console.log("second instance",instTwo());
console.log("first instance",instOne());
console.log("second instance",instTwo());
console.log("second instance",instTwo());
console.log("second instance",instTwo());
