// @Creating a contructor function for 

function UserData(firstname,lastname,age,gender){
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.gender=gender;
}
//console.log(UserData);

const user1 = new UserData("Jimmy","Mcgill",51,"Male");

console.log(user1);

/*Output:
UserData {
  firstname: 'Jimmy',
  lastname: 'Mcgill',
  age: 51,
  gender: 'Male' }
*/