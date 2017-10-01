var x = 50
function isNumber(c) {
	var numbers = [1,2,3,4,5,6,7,8,9,0];
	var bNumber = false;
	for (var i = 0; i < numbers.length; i++) {
		if (c == numbers[i]) {
			bNumber = true;
			break;
		}
	}
	return bNumber;
}

function game(num){
	if (isNumber(num) == false){
       console.log('you must enter a number')
   }
	if (num == x){
		console.log ('Your guess is correct you win!')
	}
	else if (num < x){
		console.log ('Your guess is too low')
	}
	else if (num > x){
		console.log ('Your guess is too high')
	}
}
var num = process.argv[2];
game(num);
