const car1 = {
  manufacturer: 'Lamborghini',
  model:'Gallardo',
  getDescription: function(cost,year,color){
    console.log (`This is ${this.manufacturer} ${this.model} made in ${year} color is ${color} and costs $${cost} USD`);
  }
}

car1.getDescription(200000,2003,'black');

const car2 = {
  manufacturer: 'Koenigsegg ',
  model:'One',
}

car1.getDescription.call(car2,700000,2016,'grey');