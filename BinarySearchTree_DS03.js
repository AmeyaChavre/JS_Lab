/* Binary Search Tree Implementation */

// Binary Search Tree Constructor Function (Root Node , no left or right child nodes)
function BST(value){
this.value = value;
this.left = null;
this.right = null;
}

var bt1 = new BST(50);

console.log(bt1);

/* @Output:

BST { value: 50, left: null, right: null }

*/