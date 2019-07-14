// self is used to preserve the scope to where it is declared
var myPC = {
manufacturer : "Dell",
model : "Alienware",
details : function(){
  var self = this; // self keyword will now always refer to the myPC object
  console.log("The model is : self.model >>", self.model);
  console.log("The model is : this.model >>", this.model);
  (function(){

  console.log("The model is : self.model >>", self.model);
  console.log("The model is : this.model >>", this.model); /* this keyword looses refrence to the scope of object and starts refering to global
  scope inside IIFE/nested function */
  (function(){
    console.log("The manufacturer is: this.model >>", this.model);
    console.log("The manufacturer is: self.model >>", self.model); // still
    // refers to myPC object even though nested 
  }())
  }())
}

}

myPC.details();

/* Output:
The model is : self.model >> Alienware
The model is : this.model >> Alienware
The model is : self.model >> Alienware
The model is : this.model >> undefined
The manufacturer is: this.model >> undefined
The manufacturer is: self.model >> Alienware
*/