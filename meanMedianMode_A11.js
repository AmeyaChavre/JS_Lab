function meanMedianMode(array){
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

// Mean

function getMean(array){
var sum = 0;
array.forEach( num => {
  sum += num;
})
var mean = sum/array.length;
return mean;
}

// Median

function getMedian(array){
array.sort(function(a,b) {return a-b});
var median;

if(array.length % 2 !== 0){
median = array[Math.floor(array.length/2)];
}
else{
var mid1 = array[(array.length/2)-1];
var mid2 = array[array.length/2];
median = (mid1+mid2)/2;
}
return median;
}

// Mode

function getMode(array){

var modeObject = {}; // hash table

// create modeObject

array.forEach(num => {
if(!modeObject[num]) modeObject=0;
++modeObject[num]; 
})


var maxFrequency = 0;

var modes = [];
for (var num in modeObject){
	if(modeObject[num] > maxFrequency){
		modes = [num];
		maxFrequency = modeObject[num];
	}
	else if(modeObject[num] === maxFrequency) modes.push(num);
}

if(modes.length === Object.keys(modeObject).length) modes = [];
return modes;
}

// calling the function
meanMedianMode([9,10,23,10,23,9]);


/* @Output:

{ mean: 14, median: 10, mode: [] }

*/