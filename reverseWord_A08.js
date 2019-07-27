function reverseString(string)
{

stringArr = string.split(" ");

//console.log(stringArr);
var reverseWordsArray = [];
stringArr.forEach(word => {
var reverseWord = '';
for (var i = word.length-1; i >= 0; --i)
  {
    reverseWord+=word[i];
  }
//console.log(reverseWord);
reverseWordsArray.push(reverseWord);
}
)
return reverseWordsArray.join(' ');
}



reverseString('Hello World');