function mpg (miles, gallons) {
  var liters = 0.26179;
  var gallons = liters*3.78541;
  log=miles/liters
  return ('liters of gas = ' + log)
}
var x = mpg (5,10);
console.log (x)
