function tripleAdd(num1)
{
  return function(num2)
  {
    return function(num3)
    {
      return (num3+num2+num1);
    }
  }
}



tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together 
