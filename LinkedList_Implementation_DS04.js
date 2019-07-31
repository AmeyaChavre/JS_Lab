function LinkedList(){
this.head = null;
this.tail = null;

}


function Node(value,next,prev){
this.value = value;
this.next = next;
this.prev = prev;
}


// Add to the head method implementation

LinkedList.prototype.addToHead = function(value){
	// creating a new node
var newNode = new Node(value, this.head, null); 
	// if nodes already exist
if(this.head) this.head.prev = newNode;
else this.tail = newNode;
this.head = newNode;
}


var ll = new LinkedList();

ll.addToHead(100); // tail node >> "last node"
ll.addToHead(200); // intermediate node >> "second node"
ll.addToHead(300); // head node >> "first node"

console.log(ll);


/* @Output:

LinkedList {
  head:
   Node {
     value: 300,
     next: Node { value: 200, next: [Node], prev: [Circular] },
     prev: null },
  tail:
   Node {
     value: 100,
     next: null,
     prev: Node { value: 200, next: [Circular], prev: [Node] } } }

     */

