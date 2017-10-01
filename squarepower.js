function list(num){
	var arr =[];
	var sqr = [];
	var roots = [];
	var fourthpower = [];
	var fourthroots = [];
	for (var i = 0; i <= 25; i++){
		arr.push(i);
	}
	for (var j = 0; j < arr.length; j++) {
		var n = arr[j] * arr[j];
		sqr.push(n);
		roots.push(Math.sqrt(arr[j]));
	}
		for (var d = 0; d < arr.length; d++) {
		var p = arr[d] * arr[d] * arr[d] * arr[d];
		fourthpower.push(p); 
	}
	for (var m = 0; m < roots.length; m++) {
		fourthroots.push(Math.sqrt(roots[m]));
	}
	
	console.log('the square of 0-25 is ' + sqr);
	console.log('the square root of 0-25 is ' + roots);
	console.log('the fourth power of 0-25 is ' + fourthpower);
	console.log('the fouth root of 0-25 is ' + fourthroots)
	return arr;
}
var num = 0;
var x = list (num);
console.log ('the list of number is ' + x);