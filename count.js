function count(num){
	var count = 0;
	for (var i =0; i<=num; i++){
		count+=i;
	}
	return count;
}
var n = 5;
var c = count(n);
console.log(c)