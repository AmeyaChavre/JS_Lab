// An improvement of isPalindrome_A05.js to handle whitespaces and small and capital letters

function isPalindrome(str1)
{
var str2 = str1.toLowerCase();
var str3 = str2.split(" ").join("");
console.log("Processed Input String : ",str3);
var str3_len = str3.length;
console.log("Input String Length : ",str3_len);
