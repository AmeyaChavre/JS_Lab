const cyborgOne = {
model : "T-800",
thermalVision : "Y"  
}

const cyborgTwo = {
model : "T-800",
thermalVision : "Y"  
}

console.log(cyborgOne);
console.log(cyborgTwo);


console.log(cyborgOne==cyborgTwo); 
console.log(cyborgOne===cyborgTwo);
// values are passed by reference therefore 
// two objects refer to two different locations in 
// the memory and are not equal
/*
Output:
{ model: 'T-800', thermalVision: 'Yes' }
{ model: 'T-800', thermalVision: 'Yes' }
false
false
*/