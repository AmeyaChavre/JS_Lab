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

// Implementing a Refactored version of the insert method to be able to update the email address

HashTable.prototype.insert = function(){
	var index = this.hash(key);
	if(!this.buckets[index]){
		this.buckets[index] = 
	}
	else{
		
	}
}

var myHT = new HashTable(30);
myHT.insert('Chuck Berry','chuckberry@gmail.com');
myHT.insert('Stevie Wonder','steviewonder@gmail.com');
myHT.insert('Elvis Presly','elvispresly@gmail.com');
myHT.insert('Freddy Mercury','freddymercury@gmail.com');




console.log(myHT.buckets);