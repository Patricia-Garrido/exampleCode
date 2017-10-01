function sum (array){
	var sum = 0;
	var arr = [15, 20, 30,];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]% 10==0){
			sum += arr[i];
		}
	}
	return sum;
}
var x= sum ()
console.log ('the sum of array divisible by 10 is = ' + x);