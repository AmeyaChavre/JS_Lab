function LinkedList(){
this.head = null;
this.tail = null;

}


function Node(value,next,prev){
this.value = value;
this.next = next;
this.prev = prev;
}


var LL = new LinkedList();

console.log(LL);

var N1 = new Node();

console.log(N1);

/* @Output:

LinkedList { head: null, tail: null }
Node { value: undefined, next: undefined, prev: undefined }

*/