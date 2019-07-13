// Demonstrate this keyword
// this keyword refers to the scope of object being 
// executed currently
// What!? is THIS

var car =
{
color : "Mettallic Grey",
manufacturer : "Pagani",
model : "Huayra",
rpm : 7000,
torque : 7500,
horsepower: function(){
console.log(this.rpm); // >> can access!! 
console.log(this.torque); // >> can access !!
return (this.rpm*this.torque)/(5252);

}

};

console.log(this.rpm); // >> cant access!! 
console.log(this.torque); // cant access !!
console.log(car.rpm); // >> can access!! 
console.log(car.torque); // can access !!
console.log("Pagani Huayra Horsepower: ",car.horsepower()," hp");


// output :
/*
undefined
undefined
7000
7500
7000
7500
Pagani Huayra Horsepower:  9996.191926884996  hp
*/