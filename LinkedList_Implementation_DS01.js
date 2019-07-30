// Declaring a constructor function (to be used in implementation of Linked Lists in future)

function UserBioData(firstName,lastName,age,gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}



console.log(UserBioData);

// create object user1
const user1 = new UserBioData("Walter","White",52,"Male");

console.log(user1);
// create object user2
const user2 = new UserBioData("James","McGill",50,"Male");

console.log(user2);


// add a emailDomain property to the objects

UserBioData.prototype.emailDomain = "@gmail.com";

console.log(UserBioData);

// write a function to retrieve complete email address

UserBioData.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
}


console.log("User1 Email Address: ", user1.getEmailAddress());
console.log("User2 Email Address: ",user2.getEmailAddress());

/* @Output:

[Function: UserBioData]
UserBioData {
  firstName: 'Walter',
  lastName: 'White',
  age: 52,
  gender: 'Male' }
UserBioData {
  firstName: 'James',
  lastName: 'McGill',
  age: 50,
  gender: 'Male' }
[Function: UserBioData]
User1 Email Address:  WalterWhite@gmail.com
User2 Email Address:  JamesMcGill@gmail.com

*/