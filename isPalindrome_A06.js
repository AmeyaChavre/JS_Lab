// An improvement of isPalindrome_A05.js to handle whitespaces and small and capital letters

function isPalindrome(str1)
{
var str2 = str1.toLowerCase();
var str3 = str2.split(" ").join("");
console.log("Processed Input String : ",str3);
var str3_len = str3.length;
console.log("Input String Length : ",str3_len);
var str4=""
for (var i = str3_len-1; i >= 0; i--)
{
  str4+=str3[i];
}
console.log("Processed Output String : ",str4);
if (str4===str3)
{
  return true;
}
