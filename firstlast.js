function firstLast (arr){
	var sum = 0;
	var first = 'Patricia'
	var last = 'Garrido'
	for (var i = 0; i < arr.length; i++) {
			sum = arr[i];
			if ((sum % 10) == 0){
				console.log (first);
		  	} else if ((sum % 3) == 0){
				console.log (last);
		 	} else {
        		console.log('Your array is not divisable by 10 or 3');
		}
	}                          
}
var a = [12,10,30];
var x= firstLast (a);
