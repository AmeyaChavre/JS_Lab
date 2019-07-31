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
else this.tail = newNode; // if no nodes exist
this.head = newNode;
}

// Add to the tail method implementation

LinkedList.prototype.addToTail = function(value){
	// creating a new node 
var newNode = new Node(value, null, this.tail);
// as this is the last node and nodes exist
if(this.tail) this.tail.next = newNode;
else this.head = newNode;
this.tail = newNode;
}

var ll = new LinkedList();

console.log(ll);


ll.addToTail(100);
console.log(ll);
ll.addToTail(200);
console.log(ll);
ll.addToTail(300);
console.log(ll);

/* @Output:

LinkedList { head: null, tail: null }
LinkedList {
  head: Node { value: 100, next: null, prev: null },
  tail: Node { value: 100, next: null, prev: null } }
LinkedList {
  head:
   Node {
     value: 100,
     next: Node { value: 200, next: null, prev: [Circular] },
     prev: null },
  tail:
   Node {
     value: 200,
     next: null,
     prev: Node { value: 100, next: [Circular], prev: null } } }
LinkedList {
  head:
   Node {
     value: 100,
     next: Node { value: 200, next: [Node], prev: [Circular] },
     prev: null },
  tail:
   Node {
     value: 300,
     next: null,
     prev: Node { value: 200, next: [Circular], prev: [Node] } } }


     */