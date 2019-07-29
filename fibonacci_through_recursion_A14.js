// Implementing Fibonacci using recursion

function fibonacci(position){
  if(position<3) return 1;
  else{
    return fibonacci(position-1) + fibonacci(position-2);
  }
}


fibonacci(12); // Time Complexity : O(2^n) 
//Output => 144