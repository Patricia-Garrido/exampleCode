function mpg (miles, liters) {
  var gallons=liters*3.78541;
  miles=miles/gallons;
  return miles;
}
var x = mpg (10,50);
console.log ('MPG =' + x);
