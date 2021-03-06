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


HashTable.prototype.insert = function(key,value){
	var index = this.hash(key);
	if(!this.buckets[index]){
		this.buckets[index] = new HashNode(key,value);
	}
	else if(this.buckets[index].key === key){
		this.buckets[index].value = value; // checks for the first Hash Node
	}
	else{
		var currentNode = this.buckets[index];
		while(currentNode.next){				
			if(currentNode.next.key === key){			// identifying correct node 
				currentNode.next.value = value; // setting the value 
				return;
			}
			currentNode = currentNode.next;
		}
		currentNode.next = new HashNode(key,value);
	}
}

// Implementing Get Method

HashTable.prototype.get = function(key){    // finds singers and returns their email 
	var index = this.hash(key);
	if(!this.buckets[index]) return null;
	else{
		var currentNode = this.buckets[index];
		while(currentNode){
			if(currentNode.key === key) return currentNode.value;
			currentNode = currentNode.next;
		}
	return null;                            // can't find singers returns null
	}
}


var myHT = new HashTable(30);
myHT.insert('Chuck Berry','chuckberry@gmail.com');
myHT.insert('Stevie Wonder','steviewonder@gmail.com');
myHT.insert('Elvis Presly','elvispresly@gmail.com');
myHT.insert('Freddy Mercury','freddymercury@gmail.com');

// Updating Emails

myHT.insert('Chuck Berry','chuckberry.1950@gmail.com');
myHT.insert('Stevie Wonder','steviewonder.1960@gmail.com');
myHT.insert('Elvis Presly','elvispresly.1970@gmail.com');
myHT.insert('Freddy Mercury','freddymercury.1980@gmail.com');


// Testing Get Method 

console.log('Singer1 Email Address: ',myHT.get('Chuck Berry'));
console.log('Singer2 Email Address: ',myHT.get('Stevie Wonder'));
console.log('Singer3 Email Address: ',myHT.get('Elvis Presly'));
console.log('Singer4 Email Address: ',myHT.get('Freddy Mercury'));
console.log('Singer5 Email Address: ',myHT.get('Tom Waits'));
console.log('Singer6 Email Address: ',myHT.get('Johnny Cash'));
console.log('Singer7 Email Address: ',myHT.get('Jim Morrison'));
console.log('Singer8 Email Address: ',myHT.get('John Lennon'));

/* @Output:

Singer1 Email Address:  chuckberry.1950@gmail.com
Singer2 Email Address:  steviewonder.1960@gmail.com
Singer3 Email Address:  elvispresly.1970@gmail.com
Singer4 Email Address:  freddymercury.1980@gmail.com
Singer5 Email Address:  null
Singer6 Email Address:  null
Singer7 Email Address:  null
Singer8 Email Address:  null

*/