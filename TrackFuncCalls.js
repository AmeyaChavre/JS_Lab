function myFunc(){
  let numberOfCalls=0;
  return function(){
    numberOfCalls++;
    return numberOfCalls;
  }

}

console.log(myFunc());

const firstInstanceCall= myFunc();
const secondInstanceCall= myFunc();

console.log("firstInstanceCall:",firstInstanceCall());
console.log("secondInstanceCall:",secondInstanceCall());
console.log("secondInstanceCall:",secondInstanceCall());
console.log("firstInstanceCall:",firstInstanceCall());
console.log("firstInstanceCall:",firstInstanceCall());
console.log("secondInstanceCall:",secondInstanceCall());
console.log("secondInstanceCall:",secondInstanceCall());
console.log("firstInstanceCall:",firstInstanceCall());
console.log("firstInstanceCall:",firstInstanceCall());
console.log("secondInstanceCall:",secondInstanceCall());
