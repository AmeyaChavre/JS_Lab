var string1 = 'Las Vegas';
var string2 = string1;
string1 = 'Miami';
 
console.log(string2);
 
 // strings are passed by value
////////////////////////////////
 
 
var person1 = {
  name: 'John Connor',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle Reese';
 
console.log(person1);

// objects are passed by reference