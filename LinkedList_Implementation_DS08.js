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

// Remove Tail function implementation

LinkedList.prototype.removeTail = function(){
	if(!this.tail) return null; // linked list is already empty
	var val = this.tail.value;
	this.tail = this.tail.prev;
	if(this.tail) this.tail.next = null;
	else this.head = null;
	return val;
}