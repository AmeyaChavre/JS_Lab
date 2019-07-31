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

// Remove head function implementation

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null; // linked list is already empty
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}


var ll = new LinkedList(); // creating a new linked list 

ll.addToHead(100);
ll.addToHead(50);
ll.addToTail(150);
ll.addToTail(200);



console.log(ll.removeHead()); // returns 50
console.log(ll.head); // returns 100
console.log(ll.head.next); // returns 150
console.log(ll.head.next.next); // returns 200
console.log(ll.head.next.next.next); // returns null as linked list is empty


/* @Output:

50
Node {
  value: 100,
  next:
   Node {
     value: 150,
     next: Node { value: 200, next: null, prev: [Circular] },
     prev: [Circular] },
  prev: null }
Node {
  value: 150,
  next: Node { value: 200, next: null, prev: [Circular] },
  prev: Node { value: 100, next: [Circular], prev: null } }
Node {
  value: 200,
  next: null,
  prev:
   Node {
     value: 150,
     next: [Circular],
     prev: Node { value: 100, next: [Circular], prev: null } } }
null

*/
