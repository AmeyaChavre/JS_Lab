var num = 50;
var num = 100;

/*
Under the Hood

var num; -- In Global Scope
num = 50; -- Older Value
num = 100; -- Newer Value

*/


function logNumber() {
    console.log(num); // throws undefined if line 6 is not commented
    //let num = 200; // throws error if un-commented
}
 
logNumber();


/*
Output : 100

*/