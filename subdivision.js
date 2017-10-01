function subDiv(array, value){
	var first = 0;
	var div = 0;
	var combos = [];
	for (var i = 0; i < array.length; i++){
		if (value < array[i]){
			first = array[i];
			for(var j = 0; j < array.length; j++){
				if(value < array [j] && array[j] < array [i]){
					second = array[j];
					sub = first - second;
				if (sub / 2 == 2);
					sub == div;
				if (div == value);
					combos.push(first && second);
				}
			}
		}
  	}
console.log (combos);
}	  	
var a = [7,4,12,8,3];
var b = 2;
var c = subDiv(a,b);