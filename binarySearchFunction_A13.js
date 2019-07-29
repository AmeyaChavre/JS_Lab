function binarySearchFunction(numberArray,key)
{
// find middleIndex 
var middleIndex = Math.floor(numberArray.length/2); 
// find middleElement
var middleElement = numberArray[middleIndex];

if(middleElement===key){
return true;
}
else if(key > middleElement && numberArray.length>1){
return binarySearchFunction(numberArray.splice(middleIndex,numberArray.length),key);
}
else if(key < middleElement && numberArray.length>1){
return binarySearchFunction(numberArray.splice(0,middleIndex),key);
}
else{
return false;
}


}



// test case => true

binarySearchFunction([5, 7, 12, 16, 36, 39, 42, 56, 71], 56); 