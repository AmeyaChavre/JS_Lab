// Implementation of reversedArrayInPlace without declaring a new array

function reversedArrayInPlace(arr){

for ( var i = 0; i < arr.length/2 ; ++i)
{
var tempVar = arr[i];
arr[i] = arr[arr.length - 1 - i];
arr[arr.length - 1 - i] = tempVar;
}
return arr;

}

reversedArrayInPlace([1,2,3,4,5,6,7]);