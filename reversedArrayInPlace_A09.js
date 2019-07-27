function reversedArrayinPlace(arr)
{
reversedArray = [];
for(var i = arr.length-1; i>=0; --i)
{
reversedArray.push(arr[i]);
}

arr = reversedArray;

return arr;
}



reversedArrayinPlace([1,2,3,4]);