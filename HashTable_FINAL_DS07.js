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

// Implementing a retrieveAll() Method

HashTable.prototype.retrieveAll = function(){
	var allNodes = [];
	for (var i = 0; i < this.numBuckets; ++i){
		var currentNode = this.buckets[i];
		while(currentNode){
			allNodes.push(currentNode);
			currentNode = currentNode.next;
		}
	}
	return allNodes;
		
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
myHT.insert('Tom Waits','tomwaits@gmail.com');
myHT.insert('Johnny Cash','johnnycash@gmail.com');
myHT.insert('Jim Morrison','jimmorrison@gmail.com');
myHT.insert('John Lennon','johnlennon@gmail.com');

console.log(myHT.retrieveAll());

/* @Output:

[ HashNode {
    key: 'Freddy Mercury',
    value: 'freddymercury.1980@gmail.com',
    next: null },
  HashNode {
    key: 'Jim Morrison',
    value: 'jimmorrison@gmail.com',
    next: null },
  HashNode {
    key: 'Elvis Presly',
    value: 'elvispresly.1970@gmail.com',
    next:
     HashNode { key: 'Tom Waits', value: 'tomwaits@gmail.com', next: null } },
  HashNode { key: 'Tom Waits', value: 'tomwaits@gmail.com', next: null },
  HashNode {
    key: 'Stevie Wonder',
    value: 'steviewonder.1960@gmail.com',
    next: null },
  HashNode {
    key: 'Chuck Berry',
    value: 'chuckberry.1950@gmail.com',
    next: null },
  HashNode { key: 'Johnny Cash', value: 'johnnycash@gmail.com', next: null },
  HashNode { key: 'John Lennon', value: 'johnlennon@gmail.com', next: null } ]
  
  */
  
  // Hash Tables provide : O(1) ~constant insert/search run time complexity (assuming no collisions) => better than linked lists and Binary Search Trees
  // Hash Tables do not have pointers that reference other nodes , unlike Linked Lists and Binary Search Trees
  // However, this functionality can be incorporated in Hash Tables
  