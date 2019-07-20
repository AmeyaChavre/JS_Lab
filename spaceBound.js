// @ Lets Bind()

// bind is used to attach this context to a function

this.distance = 10000;
const spaceTravel = {
distance : 4000,
getDistance : function(){
  return this.distance;
}
};


//const tripToMoon = spaceTravel.getDistance;

//tripToMoon(); // return 10000 and not 4000


const tripToMoon = spaceTravel.getDistance.bind();





 





