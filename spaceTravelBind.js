// @ Lets Bind()

// bind is used to attach this context to a function

this.distance = 10000;
const spaceTravel = {
distance : 4000,
getDistance : function(){
  return this.distance;
}
};

const spaceTravel_1 = {
distance : 8000,
getDistance : function(){
  return this.distance;
}
};

// console.log(spaceTravel);

const tripToMoon = spaceTravel.getDistance().bind(spaceTravel_1);

console.log(tripToMoon);




