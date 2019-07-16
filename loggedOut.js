function logNumbers()
{
console.log(1);
setTimeout(function(){console.log(2)},1000);
setTimeout(function(){console.log(3)},0);
console.log(4);
}

logNumbers();



/* Output

1
4
3 >> appears after 4 due to event loop
2

*/
