/* Hash Table - Implementation */


function HashTable(size){
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length; 
}

function HashNode(key,value,next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}

// Implementing a Hash Method

HashTable.prototype.hash = function(key){
	
}



















var myHT = new HashTable(30);
console.log(myHT);