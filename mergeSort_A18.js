function mergeSort(arr){
if(arr.length < 2) return arr;
var middleIndex = Math.floor(arr.length/2);
var firstHalf = arr.slice(0,middleIndex);
var secondHalf = arr.slice(middleIndex);

return merge(mergeSort(firstHalf),mergeSort(secondHalf)); // uses recursion
}


function merge(array1,array2){
var result = [];

while (array1.length && array2.length){
var minElement;
  if(array1[0]<array2[0]){
     minElement = array1.shift();
  }
  else{
    minElement = array2.shift();
  }
result.push(minElement);
}

if(array1.length) result = result.concat(array1);
else result = result.concat(array2);
return result;
}



// test case

mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);

/* @Output:
=> [ 1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000 ]
*/