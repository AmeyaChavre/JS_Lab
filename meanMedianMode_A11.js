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

}

// Mode

function getMode(array){

}