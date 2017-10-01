var hasBeenRequested = false;

var sq = require('./pattyModule.js').psquare;
var c = require('./pattyModule.js').pcircle;
var tri = require('./pattyModule.js').ptriangle;
var rec = require('./pattyModule.js').prectangle;

if (hasBeenRequested == true){
var length = process.argv[2];
var width = process.argv[3];
}
var s = sq(length,width);
console.log('area of square is ' + s);

if (hasBeenRequested == true){
var radius = process.argv[4];
}
var ci = c(radius);
console.log('area of circle is ' + ci);

if (hasBeenRequested == true){
var base = process.argv[2];
var height = process.argv[3];
}
var t = tri (base, height);
console.log('area of triangle is ' + t);

if (hasBeenRequested == true){
var length = process.argv[2];
var width = process.argv[3];
}
var r = rec (length, width);
console.log('area of rectangle is ' + r);