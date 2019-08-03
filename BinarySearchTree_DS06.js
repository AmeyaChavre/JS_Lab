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

// Implementing Contains Functionality

BST.prototype.contains = function(value){
	if(value === this.value){               // root node itself
		return true;
	}
	else if(value < this.value){			// left child node
		if(!this.left) return false;		// the left child node does not exists
		else{
			return this.left.contains(value); // if the value is found => return value
		}
	}
	else if(value > this.value) {			// right child node
		if(!this.right) return false;		// the right child node does not exists
		else{
			return this.right.contains(value); // if the value is found => return value
		}
	}
}

// Implementing  a Method for Depth First Traversal for Binary Search Tree (IN ORDER TRAVERSAL) (i.e. Least to Greatest)


BST.prototype.depthFirstTraversal = function(iteratorFunc){
		if(this.left) this.left.depthFirstTraversal(iteratorFunc);
		iteratorFunc(this.value);
		if()
}





















var bst1 = new BST(50); // root node

bst1.insert(30); // insert a value
bst1.insert(70); // insert a value
bst1.insert(100); // insert a value
bst1.insert(60); // insert a value
bst1.insert(59); // insert a value
bst1.insert(20); // insert a value
bst1.insert(35); // insert a value
bst1.insert(45); // insert a value
bst1.insert(85); // insert a value
bst1.insert(105); // insert a value
bst1.insert(10); // insert a value