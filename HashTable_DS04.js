/* Hash Table - Implementation */

// Hash Table Constructor Function

function HashTable(size){
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length; 
}

// Hash Node Constructor Function

function HashNode(key,value,next){
	this.key = key;
	this.value = value;
	this.next = next || null;
}

// Implementing a Hash Method

HashTable.prototype.hash = function(key){
	var total = 0;
	for(var i = 0; i < key.length; ++i){
		total += key.charCodeAt(i);
	}
	var bucket = total % this.numBuckets;
	return bucket;
}

// Implementing Insert Method => takes a {key:value} pair => turn them into hash node , place them in the correct bucket

HashTable.prototype.insert = function(key,value){
	var index = this.hash(key); // to identify the bucket in which hash node will be placed
	if(!this.buckets[index]) this.buckets[index] = new HashNode(key,value); // If Bucket is Empty
	else{
		var currentNode = this.buckets[index];
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = new HashNode(key,value);
	}
}


var myHT = new HashTable(30);
myHT.insert('Chuck Berry','chuckberry@gmail.com');
myHT.insert('Stevie Wonder','steviewonder@gmail.com');
myHT.insert('Elvis Presly','elvispresly@gmail.com');