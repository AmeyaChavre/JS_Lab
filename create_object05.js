// @Creating a contructor function for 

function UserData(firstname,lastname,age,gender){
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.gender=gender;
}
//console.log(UserData);

UserData.prototype.getFirstName = function(){
  return this.firstname;
}

UserData.prototype.getLastName = function(){
  return this.lastname;
}

UserData.prototype.getAge = function(){
  return this.age;
}

UserData.prototype.getGender = function(){
  return this.gender;
}

const user1 = new UserData("Jimmy","Mcgill",51,"Male");

// console.log(user1);

/*Output:
UserData {
  firstname: 'Jimmy',
  lastname: 'Mcgill',
  age: 51,
  gender: 'Male' }
*/

const user2 = new UserData("Walter","White",54,"Male");

//console.log(user2);

/*Output:
UserData {
  firstname: 'Walter',
  lastname: 'White',
  age: 54,
  gender: 'Male' }
*/
console.log("Albuquerque Police Department Database:");
console.log(`User1 BioData | Firstname : ${user1.getFirstName()} |
 Lastname : ${user1.getLastName()} | Age : ${user1.getAge()} | Gender : ${user1.getGender()}`);

 console.log(`User2 BioData | Firstname : ${user2.getFirstName()} |
 Lastname : ${user2.getLastName()} | Age : ${user2.getAge()} | Gender : ${user2.getGender()}`);

 /*
OUTPUT::
Albuquerque Police Department Database:
User1 BioData | Firstname : Jimmy |
 Lastname : Mcgill | Age : 51 | Gender : Male
User2 BioData | Firstname : Walter |
 Lastname : White | Age : 54 | Gender : Male
 */