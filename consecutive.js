var next = 0;
function consecutive(num){
	for (var i = 0; i < num.length; i++){
		next = num[i] + 1;
		if (next + 1 == num[i]){
			console.log ('Your number sequence is consecutive.')
		}else if (next + 1 != num [i]){
			break;
		}
			console.log ('Your number sequence is not consecutive.')
	}
}
var x = [1,2,3];
var c = consecutive(x);
