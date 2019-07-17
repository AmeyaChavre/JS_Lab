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

const getElement = new Atom(79,79,118);

console.log("Electrons:" , getElement.getElectrons());
console.log("Protons:" , getElement.getProtons());
console.log("Neutrons:", getElement.getNeutrons());