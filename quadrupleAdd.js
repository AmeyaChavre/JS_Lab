// Implement a function quadrupleAdd such that
// quadrupleAdd(10)(20)(30,40) gives output 100

function quadrupleAdd(num1)
{
  return function(num2)
  {
    return function(num3,num4)
    {
      return (num1+num2+num3+num4);
    }
  }
}

console.log(quadrupleAdd(10)(20)(30,40));
//console.log(quadrupleAdd(20)(40)(60,80));

// now we are to write an arrow function equivalent of 
//quadrupleAdd()


