/* Hash Table - Implementation */


function HashTable(size){
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length; 
}

function HashNode(key,value,next){
	this.key = key;
}