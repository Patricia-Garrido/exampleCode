/*var a=4
console.log ('a')
var b=2
console.log ('b')
function isBigger(a,b) {
	var b = isBigger(6,3) = true;
	var a = isBigger(2,4) = false;
	if (b = isBigger(6,3) = true && a = isBigger(2,4) = false); {
	
	}
}
*/


if ( 6 == 5) {
	console.log("the condition is true");

} else {
	console.log('the statement is false');
}



function isBigger2(a,b) {
	return ((b * 2) == a ? true : false);
}
var y = isBigger2(20,10);
console.log( ' y is ' + y);


function isBigger3(a,b) {
	var x = b * 2;
	var bigger = false;
	if (x == a) {
		bigger = true;		
	}
	return bigger;
}

var n = isBigger3(1,5);
console.log(' b is ' + n);

function power(a,b) {
	var x = 2;
	for (var i = 1; i < 3; i++){
		x *= a;
		return x;
	}
}
var n=power (4);
console.log(n)	

function convert(days) {
	var years=days/365;
	var weeks=years/52;
	console.log("weeks =" + weeks);

}
var n=days (1);
console.log (n);





