var x = 10;

function y(){
function x() {console.log(x)};
console.log(x);
 x = 100;
 console.log("value of x inside function y(): ",x);
 return;
 // function x() {console.log(x)};

}

y();

console.log(x);