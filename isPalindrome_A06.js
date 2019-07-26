// An improvement of isPalindrome_A05.js to handle whitespaces and small and capital letters

function isPalindrome(str1)
{
var str2 = str1.toLowerCase();
var str3 = str2.split(" ").join("");
