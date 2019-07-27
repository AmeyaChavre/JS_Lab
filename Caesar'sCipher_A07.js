// Implement Caesar's Cipher using JS

function caesarCipher(str,num)
{
num = num % 26;
var lowerCaseString = str.toLowerCase();
//console.log(lowerCaseString);
var alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
//console.log(alphabetArr);
var newString = '';
for (var i = 0; i < lowerCaseString.length; ++i)
{
var currentAlphabet = lowerCaseString[i];
if (currentAlphabet === ' ')
{
  newString += currentAlphabet;
  continue;
}
var currentIndex = alphabetArr.indexOf(currentAlphabet);
var newIndex = currentIndex + num;
if (newIndex > 25) { newIndex = newIndex - 26; }
if (newIndex < 0) { newIndex = newIndex + 26; }
if (str[i] === str[i].toUpperCase())
{
newString += alphabetArr[newIndex].toUpperCase();
}
else
{
newString += alphabetArr[newIndex]; 
}
}
return newString;
}

caesarCipher('Aa Bb Cc Dd',2); // returns 'Cc Dd Ee Ff'
//caesarCipher('Zookeeper',2);
//caesarCipher('JavaScript',900);
/* @Output:

TestCase1:caesarCipher('Aa Bb Cc Dd',2);
TestCase2:caesarCipher('Zookeeper',2);
TestCase3:caesarCipher('JavaScript',900);



*/