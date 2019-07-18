function Atom(electrons,protons,neutrons)
{
this.electrons=electrons;
this.protons=protons;
this.neutrons=neutrons;
}

// add a property
Atom.prototype.getElectrons = function(){
  return this.electrons;
}

Atom.prototype.getProtons = function(){
  return this.protons;
}

Atom.prototype.getNeutrons = function(){
  return this.neutrons;
}

Atom.prototype.getMassNumber = function(){
	return this.protons+this.neutrons;
}

const getElement = new Atom(79,79,118);

console.log("Electrons:" , getElement.getElectrons());
console.log("Protons:" , getElement.getProtons());
console.log("Neutrons:", getElement.getNeutrons());



console.log("Mass Number: ",getElement.getMassNumber());

/* Output
Electrons: 79
Protons: 79
Neutrons: 118
Mass Number:  197
*/

console.log("The Element is Gold (Au) , in greek : Aurum");