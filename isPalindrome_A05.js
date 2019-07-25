function isPalindrome(string)
{
console.log("Input String: ",string);
console.log("Input String Length: ",string.length);
var stringLength = string.length;
var str = '';
for (var i = stringLength-1; i >= 0; i--)
{
	str+=string[i];
}
console.log("Output String: ",str);
console.log("Output String Length: ", str.length);

if(str===string)
{
	console.log('is a palindrome!!');
	return true;
}
else
{
	console.log('is not a palindrome!!');
	return false;
}



}


//isPalindrome('stonecold');