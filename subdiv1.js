function subDiv (array, value){
	var first = 0;
	var second = 0;
	var sub = 0;
	var combos = [];
	for (var i = 0; i < array.length; i++){
		if (value < array [i]){
			first = array [i];
		}
		for (var j = 0; j < array.length; j++){
			if (value < array [j] && array [j] < array [i]){
				second = array [j];
				sub = first - second;
			}
			if (sub / 2 == 2)
				combos.push(first && second)
			console.log (combos);
			        }
		}
	}
}
var array = [7, 9, 4, 12, 8, 3];
var value = 2;
var z = subDiv (array, value);
