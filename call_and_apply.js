const car1 = {
  manufacturer: 'Lamborghini',
  model:'Gallardo',
  getDescription: function(cost,year,color){
    console.log (`This is ${this.manufacturer} ${this.model} made in ${year} color is ${color} and costs $${cost} USD`);
  }
}



const car2 = {
  manufacturer: 'Koenigsegg ',
  model:'One'
}

car1.getDescription.call(car2,700000,2016,'grey');

const car3 = {
	manufacturer: 'Pagani',
	model:'Zonda'
}
car1.getDescription(200000,2003,'black');
car1.getDescription.call(car2,700000,2016,'grey');
car1.getDescription.apply(car3,[800000,2018,'black']);