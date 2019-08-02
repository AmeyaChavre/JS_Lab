/* Binary Search Tree Implementation */


/* Recursion example */


function calculateFactorial(num){
	if(num===1){
		return 1;
	}
	else{
		return calculateFactorial(num) * calculateFactorial(num-1);
	}
	
}



calculateFactorial(4); // Output: 4! = 4 * 3 * 2 * 1 = 24