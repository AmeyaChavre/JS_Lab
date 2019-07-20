// @ Lets Bind()

// bind is used to attach this context to a function

this.distance = 10000;
const spaceTravel = {
distance : 4000,
getDistance : function(unit){
  return this.distance + this.unit;
}
};

const interGalacticTravel = {
	distance : 9999
}


//const tripToMoon = spaceTravel.getDistance;

//tripToMoon(); // returns 10000 and not 4000


const tripToMoon = spaceTravel.getDistance.bind(spaceTravel);

tripToMoon();  // returns 4000

const tripToMilkyway = spaceTravel.getDistance.bind(interGalacticTravel,ly); // returns 9999 , this context bound to interGalacticTravel



tripToMilkyway();




 





