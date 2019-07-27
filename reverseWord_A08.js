function reverseString(string)
{

stringArr = string.split(' ');
//console.log(stringArr);
var newString = '';
for (var i = 0; i < stringArr.length; ++i )
{
  for(var j = stringArr[i].length; j>=0 ; --j)
  {
    if(string[j]===' ')
    {
      newString+=string[j];
      continue;
    }
  else
    {
    newString+=string[j];
    }
  }
}
console.log(newString);
}

reverseString('Hello World');

// @Output: olleH dlroW 