var z = 0;
var arr = [1,2,3,4,5];
function sum(a,b){
	z = z + a;
	console.log(b);
}
arr.forEach(sum);
console.log('the sum value is ' + z);

arr.forEach(function(a){
	z = z + a;
});
console.log(z);