// @Method2
// using const and new keyword
const satellite = new Object();

satellite.fuel = "Solar";
satellite.ISS = 4;
satellite.type = "Geostationary";
satellite.purpose = "IBM Interceptor";
satellite.status = "Active";
satellite.getISS = function()
{
  return this.ISS;
} 


console.log(satellite.getISS());