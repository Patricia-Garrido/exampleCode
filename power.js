var num = process.argv [2];
var exp = process.argv [3];

function power(num, exp){
	var result = 1;
	for (var i = 0; i < exp; i++){
		result = result * num;
	}
	return result;
}
var x = power (num,exp);
console.log (x);