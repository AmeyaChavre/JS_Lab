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



//bst1.depthFirstTraversal(log,'in-order');
//bst1.depthFirstTraversal(log,'pre-order'); 
bst1.depthFirstTraversal(log,'post-order');

function log(value){
	console.log(value);
}



/*
@Output: (Pre-Order)

50
30
20
10
35
45
70
60
59
100
85
105

@Output: (In-Order)

10
20
30
35
45
50
59
60
70
85
100
105

@Output: (Post-Order)

10
20
45
35
30
59
60
85
105
100
70
50

*/