/*@Method1*/ 
const list1 = [1, 2, 3, 4, 5];
const list2 = list1.slice();

list1.push(6,7,8);
console.log("List1: ", list1);
console.log("List2: ", list2); // list2 remains same

/*@Method2*/

const list3 = [4,5,6];
const list4 = list3.concat([]);

list3.push(7,8,9);

console.log("List3 :",list3);
console.log("List4 :",list4); // list4 remains same

/*Method3*/

list5=[21,22,23];
list6=[]

for (let i = 0;i<list5.length;++i)
{
  list6.push(list5[i]);
}

list5.push(24,25,26);
console.log("List5: ",list5);

console.log("List6: ",list6); // list6 remains same