console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // not found as two these are two different objects
console.log('hello world'.indexOf('o'));
console.log([[1], [2], [3], [4]].indexOf([2])); // not found as these are two different arrays


/*
Output:
2
-1
4
-1
*/