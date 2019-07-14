// flight durations

function flightTimeDuration(distance)
{
  return function(speed)
  {
    return distance/speed;
  }
}

const distBetweenNYCDallas = flightTimeDuration(400);
const timetravelNYCDallas = distBetweenNYCDallas(80);

const distBetweenMiamiPhil = flightTimeDuration(300);
const timetravelMiamiPhil = distBetweenMiamiPhil(30);
console.log("Total Flight Duration between NYC and Dallas: " ,timetravelNYCDallas + " hours");
console.log("Total Flight Duration between Miami and Philadelphia: " ,timetravelMiamiPhil + " hours");

/*
Output:
Total Flight Duration between NYC and Dallas:  5 hours
Total Flight Duration between Miami and Philadelphia:  10 hours
*/

