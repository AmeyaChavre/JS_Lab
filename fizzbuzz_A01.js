// Write the Fizz Buzz Algorithm using JavaScript

// Fizz => divisible by 3
// Buzz => divisible by 5
// FizzBuzz => divisible by both 3 & 5
// num => argument of function fizz_buzz(num)


function fizz_buzz(num)
{
for (let i=1; i<=num; ++i)
  {
    if ((i % 3 === 0) && (i % 5 === 0) )
    {
      console.log('FizzBuzz');
    }
    else if ( i % 3 === 0)
    {
      console.log('Fizz');
    }
    else if ( i % 5 === 0)
    {
      console.log('Buzz');
    }
    else
    {
      console.log(i);
    }
  }
}

fizz_buzz(20);


/* @Output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
*/