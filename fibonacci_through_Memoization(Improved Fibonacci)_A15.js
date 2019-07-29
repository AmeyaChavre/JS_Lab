// Implementing Fibonacci using recursion and Memoization with time Complexity of O(n)

function fibMemo(index,cache){
cache = cache || [];
if(cache[index]){
return cache[index];
}
else{
if(index<3) return 1;
else{
  cache[index] = fibMemo(index-1,cache)+fibMemo(index-2,cache);
}
}
return cache[index];
}


fibMemo(12); // Output => 144

// fibMemo(1000); => Now, this will not hang the browser 