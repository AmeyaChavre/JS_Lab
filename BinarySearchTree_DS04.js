/* Binary Search Tree Implementation */

// Binary Search Tree Constructor Function (Root Node , no left or right child node)
function BST(value){
this.value = value;
this.left = null;
this.right = null;
}

// Implementing a Insert Functionality

BST.prototype.insert = function(value){
	if(value <= this.value){
		if(!this.left) this.left = new BST(value);
		else this.left.insert(value);
	}
	else if(value > this.value){
		if(!this.right) this.right = new BST(value);
		else this.right.insert(value);
	}	
}




var bst1 = new BST(50); // root node


bst1.insert(30); // child node
bst1.insert(45); // child node
bst1.insert(64); // child node
bst1.insert(92); // child node
bst1.insert(81); // child node
bst1.insert(37); // child node
bst1.insert(46); // child node
bst1.insert(54); // child node
bst1.insert(21); // child node

console.log(bst1);
console.log(bst1.left.right.left); // returns 37

/* @Output:

BST {
  value: 50,
  left:
   BST {
     value: 30,
     left: BST { value: 21, left: null, right: null },
     right: BST { value: 45, left: [BST], right: [BST] } },
  right:
   BST {
     value: 64,
     left: BST { value: 54, left: null, right: null },
     right: BST { value: 92, left: [BST], right: null } } }
BST { value: 37, left: null, right: null }

*/