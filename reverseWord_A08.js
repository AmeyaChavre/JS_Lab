function reverseString(string)
{

var stringArr = string.split(' ');
var lengthOfArray = stringArr.length;
var reverseString = '';
for (var i = 0; i < lengthOfArray; ++i)
{
  var wordInArray=stringArr[i];
  for (var j = wordInArray.length-1; j>=0; --j)
  { 
    reverseString+=wordInArray[j]; 
  }
}
return reverseString;
}

reverseString('Hello World');

// @Output: olleH dlroW 