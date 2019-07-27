// Implement Caesar's Cipher using JS

function caesarCipher(str,num)
{
var lowerCaseString = str.toLowerCase();
//console.log(lowerCaseString);
var alphabetArr = lowerCaseString.split('');
//console.log(alphabetArr);
var newString = '';
for (var i = 0; i < lowerCaseString.length; ++i)
{
var currentAlphabet = lowerCaseString[i];
if (currentAlphabet === ' ')
{
  newString += currentAlphabet;
}
if 

}

}

caesarCipher('Aa Bb Cc Dd',1);