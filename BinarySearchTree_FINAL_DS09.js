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

// Implementing  a Method for Depth First Traversal for Binary Search Tree (IN ORDER /PRE ORDER / POST ORDER TRAVERSAL) 


BST.prototype.depthFirstTraversal = function(iteratorFunc,order){
		if(order === 'pre-order') iteratorFunc(this.value); 
		if(this.left) this.left.depthFirstTraversal(iteratorFunc,order);
		if(order === 'in-order') iteratorFunc(this.value);
		if(this.right) this.right.depthFirstTraversal(iteratorFunc,order);
		if(order === 'post-order') iteratorFunc(this.value);
}


// Implementing a Metod for Breadth First Traversal for Binary Search Tree


BST.prototype.breadthFirstTraversal = function(iteratorFunc){
	var queue = [this]; // a fifo data structure , refers to the root node
	while(queue.length){
		var treeNode = queue.shift(); // push to the back
		iteratorFunc(treeNode);
		if(treeNode.left) queue.push(treeNode.left);
		if(treeNode.right) queue.push(treeNode.right);
	}
}


// Implementing a getMinVal() method

BST.prototype.getMinVal = function(){
	if(this.left) return this.left.getMinVal(); // should return the furthest left node as it should be smallest
	else return this.value; // returns the node since as it itself is the furthest left child node
}

// Implementing  a getMaxVal() method

BST.prototype.getMaxVal = function(){
	if(this.right) return this.right.getMaxVal(); // should return the furthest right node as it should be greatest
	else return this.value; // returns the node since as it itself is the furthest right child node
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

// testing getMinVal() and getMaxVal() methods

console.log("Min Value: " , bst1.getMinVal());
console.log("Max Value: " , bst1.getMaxVal());



/* @Output:

Min Value:  10
Max Value:  105

*/

// The search complexity of Linked List is O(n)
// Whereas, the search complexity of Binary Search Tree is O(log n) which is better than Linked List 
// however , the tree should be balanced 