/* Binary Search Tree Implementation */

// Binary Search Tree Constructor Function (Root Node , no left or right child nodes)
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


bst1.insert(30); // child nodes
bst1.insert(45);
bst1.insert(64);
bst1.insert(92);
bst1.insert(81);
bst1.insert(37);
bst1.insert(46);
bst1.insert(54);
bst1.insert(21);

