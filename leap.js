function leapyear(year){
var y = year;
var result = false;
	if((y % 100 == 0) && (y % 400 != 0)){
		result = false;
	}	
	else if(y % 4 == 0){
		result = true;
		for (var i = 0; i < 21; i++){
			y = y + 4;
			console.log(y);
		}
	}
	return result;
}
var x = leapyear(1976);
console.log('Leap year = ' + x);