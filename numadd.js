function numadd(number){
	var count = 0;
	for(var i = 1; i<=number; i++){
		count = count + i;
	}
	return count;
}
var x = 5;
var n = numadd(x);
console.log (n);
